import { useContext } from 'react';
import ThemeContext from '../../store/context';
import Sidebar from '../common/sidebar/Sidebar';
import Navbar from '../common/navbar/Navbar';

import classes from './Layout.module.scss';

const Layout = (props) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <section className={`${classes.layout} ${themeCtx.dark && classes.dark}`}>
      <Sidebar />
      <section className={classes.main}>
        <Navbar />
        <main>{props.children}</main>
      </section>
    </section>
  );
};

export default Layout;
