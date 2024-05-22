// JavaScript code
document
  .getElementById("categorySelect")
  .addEventListener("change", function () {
    const category = this.value;
    const table = document.getElementById("dataTable");
    const tableBody = table.querySelector("tbody");
    const tableRows = Array.from(tableBody.querySelectorAll("tr"));

    tableRows.forEach((row) => {
      if (row.classList.contains(category) || category === "all") {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    });

    // Adjust table height
    const visibleRows = tableBody.querySelectorAll(
      'tr[style="display: table-row;"]'
    );
    let totalHeight = 0;
    visibleRows.forEach((row) => {
      totalHeight += row.clientHeight;
    });
    table.style.height = totalHeight + "px";
  });
