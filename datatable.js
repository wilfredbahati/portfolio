const rows = document.getElementsByTagName("tr");
console.log(rows);
for (let i = 0; i < rows.length; i++) {
  if (i % 2 === 0) {
    rows[i].style.backgroundColor = "lightblue";
  } else {
    rows[i].style.backgroundColor = "#F2F2F2";
  }
}
