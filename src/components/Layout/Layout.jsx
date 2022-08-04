import Sidebar from '../common/sidebar/Sidebar';
import Navbar from '../common/navbar/Navbar';

import classes from './Layout.module.scss';

const Layout = (props) => {
  return (
    <section className={`${classes.layout} ${classes.dark}`}>
      <Sidebar />
      <section className={classes.main}>
        <Navbar />
        <main>{props.children}</main>
      </section>
    </section>
  );
};

export default Layout;
