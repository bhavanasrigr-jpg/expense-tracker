let expenses = [];

// ADD EXPENSE
function addExpense() {
  let desc = document.getElementById("desc").value;
  let amount = document.getElementById("amount").value;

  if (desc === "" || amount === "") {
    alert("Enter all fields");
    return;
  }

  expenses.push({
    desc: desc,
    amount: parseFloat(amount)
  });

  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";

  displayExpenses();
  updateSummary();
}

// DISPLAY LIST
function displayExpenses() {
  let list = document.getElementById("expenseList");
  list.innerHTML = "";

  if (expenses.length === 0) {
    list.innerHTML = "No expenses yet 😔";
    return;
  }

  expenses.forEach((e, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${e.desc} - ₹${e.amount}
      <button onclick="deleteExpense(${index})">❌</button>
    `;

    list.appendChild(li);
  });
}

// DELETE
function deleteExpense(index) {
  expenses.splice(index, 1);
  displayExpenses();
  updateSummary();
}

// SUMMARY
function updateSummary() {
  let total = 0;

  expenses.forEach(e => total += e.amount);

  document.getElementById("total").innerText = "₹" + total;
  document.getElementById("count").innerText = expenses.length;
}

// OPEN REPORTS
function openPage(pageId) {
  document.getElementById("app").style.display = "none";
  document.getElementById(pageId).style.display = "block";

  updateReport();
}

// BACK
function goBack() {
  document.getElementById("app").style.display = "block";
  document.getElementById("reportsPage").style.display = "none";
}

// REPORT DATA
function updateReport() {
  let total = 0;

  expenses.forEach(e => total += e.amount);

  document.getElementById("reportTotal").innerText = total;
  document.getElementById("reportCount").innerText = expenses.length;
}
