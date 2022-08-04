import { useContext } from 'react';
import ThemeContext from '../../store/context';
import classes from './Widgets.module.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Card from '../UI/Card';

const Widgets = ({ widget }) => {
  const style = {
    color: widget.iconColor,
    backgroundColor: widget.iconBgColor,
  };

  const themeCtx = useContext(ThemeContext);
  console.log(themeCtx.dark);

  return (
    <Card>
      <div className={`${classes.widget} ${themeCtx.dark && classes.dark}}`}>
        <div className={classes.left}>
          <span className={classes.title}>{widget.title}</span>
          <span className={classes.counter}>
            {widget?.money && '$ '}
            {widget.counter}
          </span>
          <span className={classes.link}>See details</span>
        </div>
        <div className={classes.right}>
          <span
            className={`${classes.stat} ${
              widget.growth ? classes.positive : classes.negative
            }`}
          >
            {widget.growth ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
            20%
          </span>
          <span className={classes.btn} style={style}>
            {widget.icon}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Widgets;
