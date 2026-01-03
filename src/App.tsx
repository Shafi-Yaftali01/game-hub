import { useEffect, useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "Groceries", amount: 100, category: "Food" },
    { id: 2, description: "Rent", amount: 1000, category: "Housing" },
    { id: 3, description: "Utilities", amount: 100, category: "Utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense: Expense) => expense.id !== id));
  };
  // filter component should be above the list component to show all the data in the table if no category is selected for the first time and it shouldn't be disappear when not category is selected
  useEffect(() => {
    if (selectedCategory === "") {
        setTimeout(() => {
          setSelectedCategory("All Categories");
        }, 1000);
    }
  }, [selectedCategory]);
  return (
    <div>
      <ExpenseFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        expenses={expenses}
      />
      <ExpenseList
        expenses={expenses}
        onDelete={handleDelete}
        loading={false}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};
export default App;
