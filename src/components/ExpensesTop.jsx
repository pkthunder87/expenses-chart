function ExpensesTop() {
  return (
    <div className="grid h-[7.8rem] w-[33.8rem] grid-cols-[80%_20%] grid-rows-2 items-center rounded-[20px] bg-soft-red p-6 pl-8 text-white">
      <h2 className="-mt-2 text-[1.08rem]">My balance</h2>
      <img
        className="row-span-2 ml-[.6rem]"
        src={`./logo.svg`}
        alt="Two alternating circles logo"
      />
      <h3 className="-mt-2 text-[2rem] font-bold tracking-wide">$921.48</h3>
    </div>
  );
}

export default ExpensesTop;
