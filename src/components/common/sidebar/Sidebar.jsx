import { useContext } from 'react';
import ThemeContext from '../../../store/context';
import classes from './Sidebar.module.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DnsIcon from '@mui/icons-material/Dns';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const themeCtx = useContext(ThemeContext);

  const switchToDark = () => {
    themeCtx.switchDarkTheme();
  };

  const switchToLight = () => {
    themeCtx.switchLightTheme();
  };

  return (
    <aside className={`${classes.sidebar} ${themeCtx.dark && classes.dark}`}>
      <div className={classes['logo-wrapper']}>
        <span className={classes.logo}>Dashboard</span>
      </div>
      <hr />
      <nav className={classes.nav}>
        <ul>
          <p className={classes.title}>MAIN</p>
          <li>
            <NavLink
              to='/'
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              <DashboardIcon />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/users'
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              <PeopleAltIcon />
              <span>Users</span>
            </NavLink>
          </li>
          <p className={classes.title}>SHOP</p>
          <li>
            <NavLink
              to='/products'
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              <AddBusinessIcon />
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/orders'
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              <CreditCardIcon />
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/delivery'
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              <LocalShippingIcon />
              <span>Delivery</span>
            </NavLink>
          </li>
          <p className={classes.title}>ADMIN</p>
          <li>
            <NavLink
              to='/stats'
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              <AssessmentIcon />
              <span>Stats</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/notifications'
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              <NotificationsActiveIcon />
              <span>Notifications</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/system'
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              <DnsIcon />
              <span>System</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/logs'
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              <DocumentScannerIcon />
              <span>Logs</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/settings'
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              <SettingsIcon />
              <span>Settings</span>
            </NavLink>
          </li>
          <p className={classes.title}>USER</p>
          <li>
            <NavLink
              to='/profile'
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              <AccountCircleIcon />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/logout'
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              <ExitToAppIcon />
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.theme}>
        <p>Choose Theme</p>
        <div className={classes.buttons}>
          <button
            onClick={switchToDark}
            className={`${classes.btn} ${classes.dark}`}
          ></button>
          <button
            onClick={switchToLight}
            className={`${classes.btn} ${classes.light}`}
          ></button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
