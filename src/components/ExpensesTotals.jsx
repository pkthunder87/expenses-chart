function ExpensesTotals() {
  return (
    <div className=" -mt-5 grid grid-cols-2 grid-rows-2 items-center justify-center">
      <h2 className=" text-2xl text-medium-brown sm:text-xl xl2:text-lg ">
        Total this month
      </h2>
      <div className="text-lg">&nbsp;</div>
      <h3 className=" -mt-6 text-5xl font-bold tracking-wide">$478.33</h3>
      <div className=" -mt-12 text-end text-2xl sm:-mt-9 sm:text-xl xl2:-mt-7 xl2:text-lg">
        <p className="mt-[.2rem]  font-bold">+2.4%</p>
        <p className="  -mt-1 text-medium-brown">from last month</p>
      </div>
    </div>
  );
}

export default ExpensesTotals;
