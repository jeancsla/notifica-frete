import { prisma } from "../prisma";
import { LogLevel } from "../types";

export class LoggerService {
  private executionId: string | null = null;

  constructor(executionId?: string) {
    if (executionId) this.executionId = executionId;
  }

  setExecutionId(id: string) {
    this.executionId = id;
  }

  async log(
    level: LogLevel,
    message: string,
    context?: any,
    error?: Error | string,
  ) {
    const timestamp = new Date().toISOString();
    const errorStr = error instanceof Error ? error.stack : error;
    const contextStr = context ? JSON.stringify(context) : null;
    const execIdLabel = this.executionId ? `[${this.executionId}] ` : "";

    // Enhanced console output for better visibility
    const consoleMsg = `${timestamp} [${level}] ${execIdLabel}${message}`;

    if (level === "ERROR") {
      console.error(
        consoleMsg,
        context ? { context } : "",
        errorStr ? { error: errorStr } : "",
      );
    } else if (level === "WARN") {
      console.warn(consoleMsg, context ? { context } : "");
    } else if (level === "DEBUG") {
      console.debug(consoleMsg, context ? { context } : "");
    } else {
      console.log(consoleMsg, context ? { context } : "");
    }

    try {
      await prisma.scraperLog.create({
        data: {
          level,
          message,
          context: contextStr,
          error: errorStr,
          executionId: this.executionId,
        },
      });
    } catch (dbError) {
      const dbTimestamp = new Date().toISOString();
      console.error(
        `${dbTimestamp} [ERROR] Failed to write log to database:`,
        dbError,
      );
    }
  }

  async info(message: string, context?: any) {
    await this.log("INFO", message, context);
  }

  async warn(message: string, context?: any) {
    await this.log("WARN", message, context);
  }

  async error(message: string, context?: any, error?: Error | string) {
    await this.log("ERROR", message, context, error);
  }

  async debug(message: string, context?: any) {
    await this.log("DEBUG", message, context);
  }
}

export const logger = new LoggerService();
