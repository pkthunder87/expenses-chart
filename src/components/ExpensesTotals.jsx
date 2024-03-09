function ExpensesTotals() {
  return (
    <div className=" -mt-5 grid grid-cols-2 grid-rows-2 items-center justify-center">
      <h2 className=" text-lg text-medium-brown ">Total this month</h2>
      <div className="text-lg">&nbsp;</div>
      <h3 className=" -mt-6 text-5xl font-bold tracking-wide">$478.33</h3>
      <div className=" -mt-7 text-end text-lg">
        <p className="mt-[.2rem]  font-bold">+2.4%</p>
        <p className="  -mt-1 text-medium-brown">from last month</p>
      </div>
    </div>
  );
}

export default ExpensesTotals;
