// 공통 함수
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

const STATUS_LABEL = { planned: "계획 중", booked: "예약 완료", done: "다녀옴" };

function badge(status) {
  if (!STATUS_LABEL[status]) return "";
  return `<span class="badge ${status}">${STATUS_LABEL[status]}</span>`;
}

function fmtDate(d) {
  if (!d) return "";
  const [y, m, day] = d.split("-").map(Number);
  const w = "일월화수목금토"[new Date(y, m - 1, day).getDay()];
  return `${y}.${m}.${day}(${w})`;
}

function dateRange(start, end) {
  if (!start) return "";
  if (!end || end === start) return fmtDate(start);
  const s = new Date(start), e = new Date(end);
  const nights = Math.round((e - s) / 86400000);
  return `${fmtDate(start)} ~ ${fmtDate(end)} · ${nights}박 ${nights + 1}일`;
}

function safeUrl(u) {
  return /^https?:\/\//i.test(u || "") ? u : "";
}
