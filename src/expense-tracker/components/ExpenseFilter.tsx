import { useMemo } from "react";
import type { Expense } from "../../App";
const ExpenseFilter = ({
  selectedCategory,
  setSelectedCategory,
  expenses,
}: {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  expenses: Expense[];
}) => {
  // show all the data in the table if no category is selected for the first time and it shouldn't be disappear when not category is selected
  const categories = useMemo(
    () => expenses.map((expense: Expense) => expense.category),
    [expenses]
  );
  return (
    <div className="mb-3">
      <label htmlFor="category" className="form-label">
        <select
          className="form-select"
          id="category"
          value={selectedCategory}
          onChange={(event) =>
            setSelectedCategory(event.target.value as string)
          }
        >
          <option value="">All</option>
          {categories.map((category: string) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      {categories.map((category: string) => (
        <button
          className={`btn btn-outline-primary m-2 ${
            selectedCategory === category ? "active" : ""
          }`}
          key={category}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
export { ExpenseFilter as default };
