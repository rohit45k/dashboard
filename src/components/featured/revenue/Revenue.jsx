import { useContext } from 'react';
import ThemeContext from '../../../store/context';
import classes from './Revenue.module.scss';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Card from '../../UI/Card';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Revenue = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className={`${classes.revenue} ${themeCtx.dark && classes.dark}`}>
      <Card>
        <div className={classes.title}>
          <h3>Total Revenue</h3>
          <MoreVertIcon />
        </div>
        <div className={classes.main}>
          <CircularProgressbar
            value={70}
            text={`70%`}
            className={classes.bar}
          />
          <p>Total Sales made today</p>
          <h2>$420</h2>
          <p>
            Previous transaction are processin. Last Payment may not be included
            here
          </p>
        </div>
        <div className={classes.footer}>
          <div>
            <p>Target</p>
            <span className={classes.negative}>
              <TrendingDownIcon />
              12.4K
            </span>
          </div>
          <div>
            <p>Last Week</p>
            <span className={classes.positive}>
              <TrendingUpIcon />
              12.4K
            </span>
          </div>
          <div>
            <p>Last Month</p>
            <span className={classes.positive}>
              <TrendingUpIcon />
              12.4K
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Revenue;
