const budgetData = {
  monthlyBudget: 0,
  expenses: []
};

const elements = {
  budgetValue: document.getElementById('budgetValue'),
  expensesValue: document.getElementById('expensesValue'),
  remainingValue: document.getElementById('remainingValue'),
  expenseList: document.getElementById('expenseList'),
  startButton: document.getElementById('startBudgetBtn')
};

function getBudgetInput() {
  const userInput = prompt('Enter your monthly budget:', '2500');
  const value = Number(userInput);

  if (!userInput || Number.isNaN(value) || value <= 0) {
    alert('Please enter a valid budget amount.');
    return getBudgetInput();
  }

  return value;
}

function askForExpenseName() {
  const name = prompt('Expense name (for example: Rent or Groceries):');

  if (!name || name.trim() === '') {
    alert('Expense name cannot be empty.');
    return askForExpenseName();
  }

  return name.trim();
}

function askForExpenseAmount() {
  const amountInput = prompt('Enter the expense amount:');
  const amount = Number(amountInput);

  if (Number.isNaN(amount) || amount <= 0) {
    alert('Please enter a valid expense amount.');
    return askForExpenseAmount();
  }

  return amount;
}

function addExpense(name, amount) {
  budgetData.expenses.push({ name, amount });
}

function calculateTotalExpenses() {
  return budgetData.expenses.reduce((sum, expense) => sum + expense.amount, 0);
}

function calculateRemainingBalance() {
  return budgetData.monthlyBudget - calculateTotalExpenses();
}

function renderExpenses() {
  elements.expenseList.innerHTML = '';

  if (budgetData.expenses.length === 0) {
    const emptyState = document.createElement('p');
    emptyState.textContent = 'No expenses added yet.';
    emptyState.className = 'empty-state';
    elements.expenseList.appendChild(emptyState);
    return;
  }

  budgetData.expenses.forEach((expense) => {
    const item = document.createElement('div');
    item.className = 'expense-item';

    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = expense.name;

    const amount = document.createElement('span');
    amount.className = 'amount';
    amount.textContent = `$${expense.amount.toFixed(2)}`;

    item.appendChild(name);
    item.appendChild(amount);
    elements.expenseList.appendChild(item);
  });
}

function updateSummary() {
  const totalExpenses = calculateTotalExpenses();
  const remainingBalance = calculateRemainingBalance();

  elements.budgetValue.textContent = `$${budgetData.monthlyBudget.toFixed(2)}`;
  elements.expensesValue.textContent = `$${totalExpenses.toFixed(2)}`;
  elements.remainingValue.textContent = `$${remainingBalance.toFixed(2)}`;

  console.log('Monthly Budget:', `$${budgetData.monthlyBudget.toFixed(2)}`);
  console.log('Total Expenses:', `$${totalExpenses.toFixed(2)}`);
  console.log('Remaining Balance:', `$${remainingBalance.toFixed(2)}`);
}

function collectBudgetData() {
  budgetData.monthlyBudget = getBudgetInput();

  const numberOfExpenses = Number(prompt('How many expenses would you like to add?', '3'));

  if (Number.isNaN(numberOfExpenses) || numberOfExpenses <= 0) {
    alert('Please enter a valid number of expenses.');
    collectBudgetData();
    return;
  }

  for (let i = 0; i < numberOfExpenses; i += 1) {
    const name = askForExpenseName();
    const amount = askForExpenseAmount();
    addExpense(name, amount);
  }

  renderExpenses();
  updateSummary();
}

function initializeApp() {
  elements.startButton.addEventListener('click', collectBudgetData);

  budgetData.monthlyBudget = 0;
  budgetData.expenses = [];
  updateSummary();
}

initializeApp();
