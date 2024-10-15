fetch("http://localhost:3000/json").then((res) => {
  res.json().then((value) => {
    createRow(value);
  });
});

const table = document.querySelector("table");

function createRow(rec) {
  const row = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.textContent = rec["name"];
  row.append(td1);
  const td2 = document.createElement("td");
  td2.textContent = rec["age"];
  row.append(td2);
  const td3 = document.createElement("td");
  td3.textContent = rec["birth date"];
  row.append(td3);
  table.appendChild(row);
}
