import ExpensesBottom from './ExpensesBottom';
import ExpensesTop from './ExpensesTop';

function ExpensesLayout() {
  return (
    <div className="flex flex-col gap-6">
      <div className="">
        <ExpensesTop />
      </div>
      <div className="">
        <ExpensesBottom />
      </div>
    </div>
  );
}

export default ExpensesLayout;
