import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'mon',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'sun',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function ExpensesChart() {
  return (
    <div>
      <h2 className="text-[2rem] font-bold tracking-[.02em]">
        Spending - Last 7 days
      </h2>
      <ResponsiveContainer width={'100%'} height={200}>
        <BarChart data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
