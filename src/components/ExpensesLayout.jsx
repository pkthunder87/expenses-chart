import ExpensesBottom from './ExpensesBottom';
import ExpensesTop from './ExpensesTop';

function ExpensesLayout() {
  return (
    <div className="flex flex-col gap-6">
      <div className="">
        <ExpensesTop />
      </div>
      <div className="flex h-[31.9rem] w-[33.8rem] items-center justify-center rounded-[20px] bg-white">
        <ExpensesBottom />
      </div>
    </div>
  );
}

export default ExpensesLayout;
