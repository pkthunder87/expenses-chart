import ExpensesBottom from './ExpensesBottom';
import ExpensesTop from './ExpensesTop';

function ExpensesLayout() {
  return (
    <div className="flex flex-col gap-6">
      <div className="drop-shadow-sm">
        <ExpensesTop />
      </div>
      <div className="drop-shadow-sm">
        <ExpensesBottom />
      </div>
    </div>
  );
}

export default ExpensesLayout;
