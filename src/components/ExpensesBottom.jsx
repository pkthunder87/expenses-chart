import ExpensesChart from './ExpensesChart';
import ExpensesTotals from './ExpensesTotals';

function ExpensesBottom() {
  return (
    <div className="grid h-[31.9rem] w-[33.8rem] rounded-[20px] bg-very-pale-orange px-10 py-7 text-dark-brown">
      <ExpensesChart />
      <ExpensesTotals />
    </div>
  );
}

export default ExpensesBottom;
