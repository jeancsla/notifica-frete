export type LogLevel = "INFO" | "WARN" | "ERROR" | "DEBUG";

export interface ProcessResult {
  viagem: string;
  status: "created" | "updated" | "error";
  error?: string;
}

export interface ScrapeSummary {
  totalFound: number;
  created: number;
  updated: number;
  errors: number;
}

export interface ScrapeResponse {
  success: boolean;
  executionId: string;
  summary?: ScrapeSummary;
  cargas?: { viagem: string; tipoTransporte: string; status: string }[];
  error?: string;
  details?: string;
  duration?: string;
}
