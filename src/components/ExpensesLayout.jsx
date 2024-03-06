import ExpensesBottom from './ExpensesBottom';
import ExpensesTop from './ExpensesTop';

function ExpensesLayout() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex h-16 w-80 items-center justify-center rounded-lg bg-soft-red text-white">
        <ExpensesTop />
      </div>
      <div className="flex h-72 w-80 items-center justify-center rounded-lg bg-white">
        <ExpensesBottom />
      </div>
    </div>
  );
}

export default ExpensesLayout;
