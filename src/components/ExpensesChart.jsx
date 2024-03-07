import { BarChart, Bar, Tooltip, ResponsiveContainer, XAxis } from 'recharts';
import dataJSON from './data.json';

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

// Highlights the current days bar in cyan and others in soft red
const newData = dataJSON.map((data) => {
  return {
    ...data,
    fill: `${data.day === dayOfWeek[currentDay] ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'}`,
  };
});

export default function ExpensesChart() {
  return (
    <div>
      <h2 className="text-[2rem] font-bold tracking-[.02em]">
        Spending - Last 7 days
      </h2>
      <ResponsiveContainer
        className="-ml-[.6rem] text-base "
        width={'104%'}
        height={'68%'}
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

          <Bar dataKey="amount" radius={5} barSize={50} />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
      <hr className="mt-7 border-[1px] border-cream"></hr>
    </div>
  );
}
