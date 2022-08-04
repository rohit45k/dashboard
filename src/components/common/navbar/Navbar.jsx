import { useContext } from 'react';
import ThemeContext from '../../../store/context';
import classes from './Navbar.module.scss';
import userAvatar from '../../../assets/user-avatar.jpg';

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const Navbar = () => {
  const themeCtx = useContext(ThemeContext);

  const toggleTheme = () => {
    themeCtx.switchTheme();
  };

  return (
    <div className={`${classes.navbar} ${themeCtx.dark && classes.dark}`}>
      <div className={classes.search}>
        <input type='text' placeholder='Search...' />
        <SearchIcon className={classes.icon} />
      </div>
      <ul className={classes.icons}>
        <li>
          <LanguageIcon />
          <span>Language</span>
        </li>
        <li onClick={toggleTheme}>
          {themeCtx.dark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </li>
        <li>
          <CropFreeOutlinedIcon />
        </li>
        <li>
          <NotificationsNoneOutlinedIcon />
          <span className={classes.counter}>1</span>
        </li>
        <li>
          <ChatBubbleOutlineOutlinedIcon />
          <span className={classes.counter}>2</span>
        </li>
        <li>
          <ListOutlinedIcon />
        </li>
        <li>
          <img
            src={userAvatar}
            alt='user login profile'
            className={classes.avatar}
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
