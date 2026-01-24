const REFRESH_INTERVAL = 30; // seconds
let countdown = REFRESH_INTERVAL;

const elements = {
  totalCargas: document.getElementById("totalCargas"),
  lastStats: document.getElementById("lastStats"),
  cargasTable: document.querySelector("#cargasTable tbody"),
  logList: document.getElementById("logList"),
  scrapeBtn: document.getElementById("scrapeBtn"),
  countdown: document.getElementById("countdown"),
  toast: document.getElementById("toast"),
  tabBtns: document.querySelectorAll(".tab-btn"),
  tabContents: document.querySelectorAll(".tab-content"),
};

async function fetchData() {
  const token = localStorage.getItem("auth_token");
  if (!token) {
    window.location.href = "/login";
    return;
  }

  try {
    const [cargasRes, logsRes] = await Promise.all([
      fetch("/api/cargas", {
        headers: { Authorization: `Bearer ${token}` },
      }),
      fetch("/api/logs", {
        headers: { Authorization: `Bearer ${token}` },
      }),
    ]);

    if (cargasRes.status === 401 || logsRes.status === 401) {
      localStorage.removeItem("auth_token");
      window.location.href = "/login";
      return;
    }

    const cargas = await cargasRes.json();
    const logs = await logsRes.json();

    renderCargas(cargas);
    renderLogs(logs);
    updateStats(cargas, logs);
  } catch (err) {
    showToast("Erro ao carregar dados do servidor", "error");
  }
}

function renderCargas(cargas) {
  elements.cargasTable.innerHTML =
    cargas
      .map(
        (c) => `
        <tr class="hover:bg-white/5 transition-colors">
            <td class="px-4 py-4 font-mono text-xs text-blue-400 font-bold">${c.viagem}</td>
            <td class="px-4 py-4">
              <div class="flex flex-col">
                <span class="text-white font-medium">${c.origem}</span>
                <span class="text-[10px] text-zinc-500">→ ${c.destino}</span>
              </div>
            </td>
            <td class="px-4 py-4 text-zinc-300 text-xs">${c.equipamento}</td>
            <td class="px-4 py-4">
              <span class="px-2 py-1 rounded bg-zinc-800 text-zinc-300 text-[10px] font-medium border border-zinc-700">
                ${c.prevColeta}
              </span>
            </td>
            <td class="px-4 py-4 font-semibold text-green-400">
              ${c.vrFrete ? `R$ ${c.vrFrete}` : '<span class="text-zinc-600">-</span>'}
            </td>
            <td class="px-4 py-4 text-zinc-500 text-[10px]">
              ${new Date(c.createdAt).toLocaleString("pt-BR")}
            </td>
        </tr>
    `,
      )
      .join("") ||
    '<tr><td colspan="6" class="px-4 py-12 text-center text-zinc-500 italic">Nenhuma carga monitorada no momento</td></tr>';

  elements.totalCargas.innerText = cargas.length;
}

function renderLogs(logs) {
  elements.logList.innerHTML =
    logs
      .map((l) => {
        const levelColors = {
          INFO: "text-blue-400 bg-blue-400/10 border-blue-400/20",
          WARN: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
          ERROR: "text-red-400 bg-red-400/10 border-red-400/20",
          DEBUG: "text-zinc-400 bg-zinc-400/10 border-zinc-400/20",
        };
        const colorClass = levelColors[l.level] || levelColors["INFO"];

        return `
          <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 font-mono text-xs">
              <span class="text-zinc-500 whitespace-nowrap">${new Date(l.timestamp).toLocaleTimeString("pt-BR")}</span>
              <span class="px-2 py-0.5 rounded border ${colorClass} text-[10px] font-bold">${l.level}</span>
              <span class="text-zinc-300 flex-1 truncate">${l.message}</span>
          </div>
        `;
      })
      .join("") ||
    '<div class="text-center py-12 text-zinc-600 italic">Resumo de logs vazio</div>';
}

function updateStats(cargas, logs) {
  const lastSummary = logs.find((l) =>
    l.message.includes("Extraction complete"),
  );
  if (lastSummary) {
    const match = lastSummary.message.match(/\d+/);
    elements.lastStats.innerText = match ? match[0] : "--";
  }
}

async function triggerScrape() {
  elements.scrapeBtn.disabled = true;
  const originalHtml = elements.scrapeBtn.innerHTML;
  elements.scrapeBtn.innerHTML =
    '<span class="mr-2 animate-spin text-lg">⌛</span> Processando...';

  try {
    const token = localStorage.getItem("auth_token");
    const res = await fetch("/api/scrape", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      localStorage.removeItem("auth_token");
      window.location.href = "/login";
      return;
    }

    const data = await res.json();

    if (data.success) {
      showToast(
        "Sucesso",
        `Scraping finalizado! ${data.summary.totalFound} cargas processadas.`,
      );
      fetchData();
    } else {
      showToast(
        "Erro no Processamento",
        `${data.details || data.error}`,
        "error",
      );
    }
  } catch (err) {
    showToast(
      "Erro de Conexão",
      "Não foi possível estabelecer contato com o servidor.",
      "error",
    );
  } finally {
    elements.scrapeBtn.disabled = false;
    elements.scrapeBtn.innerHTML = originalHtml;
  }
}

function showToast(title, msg, type = "success") {
  const toastTitle = document.getElementById("toastTitle");
  const toastMessage = document.getElementById("toastMessage");

  toastTitle.innerText = title;
  toastMessage.innerText = msg;

  elements.toast.style.borderLeftColor =
    type === "error" ? "rgb(239 68 68)" : "rgb(34 197 94)";

  elements.toast.classList.add("show");
  setTimeout(() => elements.toast.classList.remove("show"), 5000);
}

// Tabs Logic
elements.tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    elements.tabBtns.forEach((b) => b.setAttribute("data-active", "false"));
    elements.tabContents.forEach((c) => {
      c.classList.add("hidden");
      c.classList.remove("block");
    });

    btn.setAttribute("data-active", "true");
    const content = document.getElementById(`${tab}Tab`);
    content.classList.remove("hidden");
    content.classList.add("block");
  });
});

// Auto Refresh
setInterval(() => {
  countdown--;
  if (countdown <= 0) {
    fetchData();
    countdown = REFRESH_INTERVAL;
  }
  elements.countdown.innerText = countdown;
}, 1000);

elements.scrapeBtn.addEventListener("click", triggerScrape);

// Init
fetchData();
