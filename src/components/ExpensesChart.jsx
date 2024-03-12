import { BarChart, Bar, Tooltip, ResponsiveContainer, XAxis } from 'recharts';
import dataJSON from './data.json';
import { useState } from 'react';

const day = new Date();
const currentDay = day.getDay();
const dayOfWeek = {
  0: 'sun',
  1: 'mon',
  2: 'tue',
  3: 'wed',
  4: 'thu',
  5: 'fri',
  6: 'sat',
};

// Adjust bar height/width based on screen size
const barHeight = window.innerWidth < 1440 ? '77%' : '68%';

const barWidth =
  window.innerWidth <= 375
    ? 33
    : window.innerWidth < 1440 && window.innerWidth > 375
      ? 40
      : 50;

// Adjust tooltip position based on screen size
const tooltipOffsetX =
  window.innerWidth <= 375
    ? 8
    : window.innerWidth < 1440 && window.innerWidth > 375
      ? 11
      : 13;

const tooltipOffsetY =
  window.innerWidth <= 375
    ? 33
    : window.innerWidth < 1440 && window.innerWidth > 375
      ? 40
      : 47;

// Highlights the current days bar in cyan and others in soft red
const newData = dataJSON.map((data) => {
  return {
    ...data,
    fill: `${data.day === dayOfWeek[currentDay] ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'}`,
  };
});

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip  flex h-10 w-[4.8rem] items-center justify-center rounded-[.4rem] bg-dark-brown">
        <p className="label font-bold text-white">{`$${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function ExpensesChart() {
  let [barData, setBarData] = useState({});
  console.log(window.innerWidth);

  return (
    <div>
      <h2 className="mt-4 text-4xl font-bold tracking-[.02em] sm:mt-0 sm:text-[2rem]">
        Spending - Last 7 days
      </h2>
      <ResponsiveContainer
        className="-ml-[.6rem] -mt-2 text-base sm:mt-0"
        width={'104%'}
        height={'77%'}
      >
        <BarChart
          data={newData}
          margin={{ top: 40, right: 0, bottom: 5, left: 0 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={{ fill: 'hsl(28, 10%, 53%)' }}
            dy={5}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={false}
            position={{
              x: barData.x - tooltipOffsetX,
              y: barData.y - tooltipOffsetY,
            }}
            allowEscapeViewBox={{ x: true, y: true }}
          />
          <Bar
            className="relative hover:cursor-pointer"
            dataKey="amount"
            radius={5}
            barSize={'50%'}
            activeBar={{ filter: 'brightness(1.5)' }}
            onMouseOver={(data) => {
              setBarData(data);
              console.log(data);
            }}
          />
        </BarChart>
      </ResponsiveContainer>
      <hr className="mt-7 border-[1px] border-cream sm:mt-4 xl2:mt-7"></hr>
    </div>
  );
}
