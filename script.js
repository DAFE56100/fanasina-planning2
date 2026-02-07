const tableBody = document.querySelector("#planning tbody");

function addRow(data = []) {
  const row = document.createElement("tr");

  for (let i = 0; i < 8; i++) {
    const cell = document.createElement("td");
    const input = document.createElement("input");
    input.value = data[i] || "";
    input.onchange = saveData;
    cell.appendChild(input);
    row.appendChild(cell);
  }

  tableBody.appendChild(row);
  saveData();
}

function saveData() {
  const rows = [];
  document.querySelectorAll("tbody tr").forEach(tr => {
    const row = [];
    tr.querySelectorAll("input").forEach(input => {
      row.push(input.value);
    });
    rows.push(row);
  });
  localStorage.setItem("planning2026", JSON.stringify(rows));
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("planning2026")) || [];
  data.forEach(row => addRow(row));
}

loadData();
