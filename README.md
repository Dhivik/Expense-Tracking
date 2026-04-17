# 💸 Expense Tracker

A clean and functional expense tracking application built with **React** and **Vite**. Track your daily expenses by category, sort and filter them, and persist your data across sessions — all without a backend.

## 🚀 Features

- ✅ **Add Expenses** — Log expenses with a title, category, and amount
- ✏️ **Edit Expenses** — Modify any existing entry inline
- 🗑️ **Delete Expenses** — Remove entries you no longer need
- 🔽 **Filter by Category** — View expenses by Grocery, Clothes, Bills, and more
- 🔃 **Sort by Amount** — Toggle ascending/descending order
- 💾 **Persistent Storage** — Data saved to `localStorage`, survives page refreshes
- 🪝 **Custom Hooks** — Abstracted localStorage logic into a reusable custom hook

## 🛠️ Tech Stack

| Tech              | Usage                       |
| ----------------- | --------------------------- |
| React             | UI & Component Architecture |
| Vite              | Build tool & dev server     |
| JavaScript (ES6+) | Core logic                  |
| CSS               | Styling                     |
| localStorage      | Client-side persistence     |

## 📁 Project Structure

```
src/
├── components/        # UI components (Form, Table, etc.)
├── hooks/             # Custom hooks (useLocalStorage)
└── App.jsx            # Root component
```

---

### Installation

```bash
# Clone the repository
git clone https://github.com/Dhivik/Expense-Tracking.git

# Navigate into the project
cd Expense-Tracking

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🧠 Key Implementation Details

### Custom Hook — `useLocalStorage`

Instead of directly calling `localStorage` in components, a custom hook abstracts read/write logic, making it reusable and keeping components clean.

```js
const [expenses, setExpenses] = useLocalStorage("expenses", []);
```

### Category Filter

Expenses can be filtered by category using a dropdown. Selecting "All" shows the full list.

### Amount Sorting

Click the sort icon in the table header to toggle between ascending and descending order by amount.

---

## 📸 Screenshot

![Expense Tracker Screenshot](./public/screenshot.png)

---

## 🙋‍♂️ Author

**Dhivik**

- GitHub: [@Dhivik](https://github.com/Dhivik)
