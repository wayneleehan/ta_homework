document.getElementById("gradeForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const mathGrade = parseFloat(document.getElementById("mathGrade").value);
  const englishGrade = parseFloat(document.getElementById("englishGrade").value);

  const average = ((mathGrade + englishGrade) / 2).toFixed(2);

  // Add new row
  const tbody = document.querySelector("#gradesTable tbody");
  const row = document.createElement("tr");
  row.innerHTML = `<td>${mathGrade}</td><td>${englishGrade}</td><td>${average}</td>`;
  tbody.appendChild(row);

  document.getElementById("mathGrade").value = "";
  document.getElementById("englishGrade").value = "";

  // Update averages
  updateAverages();
});

function updateAverages() {
  const rows = document.querySelectorAll("#gradesTable tbody tr");
  let mathTotal = 0, englishTotal = 0, overallTotal = 0;

  rows.forEach(row => {
    const cells = row.children;
    mathTotal += parseFloat(cells[0].textContent);
    englishTotal += parseFloat(cells[1].textContent);
    overallTotal += parseFloat(cells[2].textContent);
  });

  const rowCount = rows.length;
  const mathAvg = (mathTotal / rowCount).toFixed(2);
  const englishAvg = (englishTotal / rowCount).toFixed(2);
  const overallAvg = (overallTotal / rowCount).toFixed(2);

  document.getElementById("mathAverage").textContent = `Math Avg: ${mathAvg}`;
  document.getElementById("englishAverage").textContent = `English Avg: ${englishAvg}`;
  document.getElementById("overallAverage").textContent = `Overall Avg: ${overallAvg}`;
}
