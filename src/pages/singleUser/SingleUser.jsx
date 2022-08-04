import { useContext } from 'react';
import ThemeContext from '../../store/context';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/UI/Card';
import classes from './SingleUser.module.scss';
import { userRows } from '../../data/users';
import EditIcon from '@mui/icons-material/Edit';
import Chart from '../../components/featured/chart/Chart';
import UserList from '../../components/featured/users/UserList';

const SingleUser = () => {
  const themeCtx = useContext(ThemeContext);

  const { qId } = useParams();
  const queryId = +qId;

  const [userInfo, setUserInfo] = useState({});

  const setUser = useCallback(() => {
    const user = userRows.find((u) => u.id === queryId);
    setUserInfo(user);
  }, [queryId]);

  useEffect(() => {
    setUser();
  }, [setUser]);

  return (
    <div className={`${classes.single} ${themeCtx.dark && classes.dark}`}>
      <div className={classes.top}>
        <Card>
          <div className={classes.title}>
            <h3>Information</h3>
            <EditIcon className={classes.editBtn} />
          </div>
          <div className={classes.left}>
            <img src={userInfo?.img} alt='Avatar' />
            <div className={classes.info}>
              <p>
                Name: <span>{userInfo?.username}</span>
              </p>
              <p>
                Email: <span>{userInfo?.email}</span>
              </p>
              <p>
                Age: <span>{userInfo?.age}</span>
              </p>
              <p>
                Phone: <span>+91 3256 325 468</span>
              </p>
              <p>
                Address: <span>148, New St. London, UK</span>
              </p>
            </div>
          </div>
        </Card>
        <Chart title='Last 6 months commerce' />
      </div>
      <UserList />
    </div>
  );
};

export default SingleUser;
