import { useContext } from 'react';
import ThemeContext from '../../store/context';
import classes from './Home.module.scss';

import Widgets from '../../components/widgets/Widgets';

import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Revenue from '../../components/featured/revenue/Revenue';
import Chart from '../../components/featured/chart/Chart';
import UserList from '../../components/featured/users/UserList';

const DUMMY_WIDGET_DATA = [
  {
    id: 1,
    title: 'USERS',
    counter: 12223,
    growth: true,
    icon: <PersonIcon />,
    iconColor: '#DB4437',
    iconBgColor: '#ec9e98',
  },
  {
    id: 2,
    title: 'ORDERS',
    counter: 1002,
    growth: false,
    icon: <ShoppingCartIcon />,
    iconColor: '#4285F4',
    iconBgColor: '#93b9f8',
  },
  {
    id: 3,
    title: 'EARNING',
    counter: 12223,
    growth: false,
    icon: <MonetizationOnIcon />,
    iconColor: '#0F9D58',
    iconBgColor: '#8bf4c1',
    money: true,
  },
  {
    id: 4,
    title: 'BALANCE',
    counter: 1000,
    growth: true,
    icon: <AccountBalanceWalletIcon />,
    iconColor: '#F4B400',
    iconBgColor: '#ffdd7e',
    money: true,
  },
];

const Home = () => {
  const themeCtx = useContext(ThemeContext);

  const widgets = DUMMY_WIDGET_DATA.map((widget) => (
    <Widgets key={widget.id} widget={widget} />
  ));

  return (
    <div className={`${classes.home} ${themeCtx.dark && classes.dark}`}>
      <section className={classes.widgets}>{widgets}</section>
      <section className={classes.featured}>
        <Revenue />
        <Chart title='Last 6 months revenue' />
      </section>
      <UserList />
    </div>
  );
};

export default Home;
