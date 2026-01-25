import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Overview } from "../components/Overview";
import { vi, describe, it, expect, beforeEach } from "vitest";

// Mock the Eden API client
vi.mock("@/lib/eden", () => ({
  api: {
    api: {
      cargas: {
        get: vi.fn(() => Promise.resolve({ data: [] })),
      },
    },
  },
}));

describe("Overview Component", () => {
  it("renders the control panel header", () => {
    render(<Overview />);
    expect(screen.getByText(/Painel Geral/i)).toBeInTheDocument();
  });

  it("shows empty list message when no loads are present", async () => {
    render(<Overview />);
    await waitFor(() => {
      expect(screen.getByText(/Lista Vazia/i)).toBeInTheDocument();
    });
  });

  it("updates filter state when typing in the search box", () => {
    render(<Overview />);
    const input = screen.getByPlaceholderText(
      /Pesquisar cidade, placa ou tipo/i,
    );
    fireEvent.change(input, { target: { value: "São Paulo" } });
    expect(input).toHaveValue("São Paulo");
  });
});
