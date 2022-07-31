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

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes['logo-wrapper']}>
        <span className={classes.logo}>Dashboard</span>
      </div>
      <hr />
      <nav className={classes.nav}>
        <ul>
          <p className={classes.title}>MAIN</p>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <PeopleAltIcon />
            <span>Users</span>
          </li>
          <p className={classes.title}>SHOP</p>
          <li>
            <AddBusinessIcon />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <p className={classes.title}>ADMIN</p>
          <li>
            <AssessmentIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon />
            <span>Notifications</span>
          </li>
          <li>
            <DnsIcon />
            <span>System</span>
          </li>
          <li>
            <DocumentScannerIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <p className={classes.title}>USER</p>
          <li>
            <AccountCircleIcon />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
      <div className={classes.theme}>
        <p>Choose Theme</p>
        <div className={classes.buttons}>
          <button className={`${classes.btn} ${classes.dark}`}></button>
          <button className={`${classes.btn} ${classes.light}`}></button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
