import type { Expense } from "../../App";

const ExpenseList = ({
  expenses,
  onDelete,
  loading,
  selectedCategory,
}: {
  expenses: Expense[];
  onDelete: (id: number) => void;
  loading: boolean;
  selectedCategory: string;
}) => {
  if (expenses.length === 0) {
    return <p>No expenses found</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  const filteredExpenses = expenses.filter((expense: Expense) => selectedCategory === "" ? true : expense.category === selectedCategory); 
  return (
    <table className="table table-bordered">
      <tbody>
        {filteredExpenses.map((expense: Expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export { ExpenseList as default };
