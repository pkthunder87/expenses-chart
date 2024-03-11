function ExpensesTop() {
  return (
    <div className="grid h-[9rem] w-[33.8rem] grid-cols-[80%_20%] grid-rows-2 items-center rounded-xl bg-soft-red p-6 pl-8 text-white sm:h-[7.8rem] sm:rounded-[20px]">
      <h2 className="-mt-2 text-2xl sm:text-[1.08rem]">My balance</h2>
      <img
        className="row-span-2 -ml-3 sm:ml-[.6rem] "
        src={`./logo.svg`}
        alt="Two alternating circles logo"
      />
      <h3 className="-mt-2 text-4xl font-bold tracking-wide sm:text-[2rem]">
        $921.48
      </h3>
    </div>
  );
}

export default ExpensesTop;
