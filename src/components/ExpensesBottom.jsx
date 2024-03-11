import ExpensesChart from './ExpensesChart';
import ExpensesTotals from './ExpensesTotals';

function ExpensesBottom() {
  return (
    <div className=" grid h-[44rem] w-[33.8rem] grid-rows-[85%_15%] rounded-xl bg-very-pale-orange px-10 py-7 text-dark-brown sm:h-[31.9rem] sm:grid-rows-[80%_20%] sm:rounded-[20px]">
      <ExpensesChart />
      <ExpensesTotals />
    </div>
  );
}

export default ExpensesBottom;
