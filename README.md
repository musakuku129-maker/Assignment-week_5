# SpendWise

SpendWise is a small budgeting app that helps a user plan a monthly budget, record expenses, and calculate how much money remains after spending.

## What the project does

The app lets a user enter a monthly budget and then add several expenses. It calculates the total amount spent and shows the remaining balance. This makes it easier to understand spending habits and stay within a budget.

## JavaScript concepts implemented

- Variables: The project stores budget information and expense details in variables and objects.
- Data types: Numbers are used for currency values, while strings are used for expense names.
- User input: The app collects user data through JavaScript `prompt()` dialogs so the user can enter the budget and each expense.
- Calculations: The project performs subtraction and summation to determine total expenses and remaining balance.
- Functions: Reusable functions organize the code and make it easier to manage logic for receiving input, calculating totals, and updating the screen.

## How variables are being used

The application uses a `budgetData` object to hold:

- `monthlyBudget`: the total available money for the month
- `expenses`: an array of expense objects containing names and amounts

This structure keeps the budget information organized and easy to work with.

## How user input is collected

The app uses browser prompts to ask for:

- the monthly budget amount
- the number of expenses to add
- each expense name
- each expense amount

The values are stored in variables so they can be processed by calculations.

## How calculations are performed

The script calculates:

- total expenses by adding all expense amounts together
- remaining balance by subtracting total expenses from the monthly budget

These calculations are performed in dedicated functions so the logic stays clear and reusable.

## How functions help organize the code

Key functions include:

- `getBudgetInput()` to validate the monthly budget value
- `askForExpenseName()` and `askForExpenseAmount()` to gather expense data
- `addExpense()` to save each expense item
- `calculateTotalExpenses()` to sum all spending
- `calculateRemainingBalance()` to determine what is left
- `updateSummary()` to display the final results in the browser console and on the page

These functions separate the application logic into small, manageable pieces.

## Running the project

Open `index.html` in a browser to use SpendWise.
