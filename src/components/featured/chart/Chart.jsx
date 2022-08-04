import { useContext } from 'react';
import ThemeContext from '../../../store/context';
import classes from './Chart.module.scss';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    total: 750,
  },
  {
    name: 'Feb',
    total: 1200,
  },
  {
    name: 'Mar',
    total: 800,
  },
  {
    name: 'Apr',
    total: 1100,
  },
  {
    name: 'May',
    total: 900,
  },
  {
    name: 'Jun',
    total: 1100,
  },
];

const Chart = ({ title }) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className={`${classes.chart} ${themeCtx.dark && classes.dark}`}>
      <h3>{title}</h3>
      <ResponsiveContainer width='100%'>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#82ca9d' stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' className={classes.chartGrid} />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='total'
            stroke='#82ca9d'
            fillOpacity={1}
            fill='url(#total)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
