import Card from '../../components/UI/Card';
import classes from './SingleUser.module.scss';

import EditIcon from '@mui/icons-material/Edit';
import Chart from '../../components/featured/chart/Chart';
import UserList from '../../components/featured/users/UserList';

const SingleUser = () => {
  return (
    <div className={classes.single}>
      <div className={classes.top}>
        <Card>
          <div className={classes.title}>
            <h3>Information</h3>
            <EditIcon className={classes.editBtn} />
          </div>
          <div className={classes.left}>
            <img
              src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
              alt='Avatar'
            />
            <div className={classes.info}>
              <p>
                Name: <span>Jane Doe</span>
              </p>
              <p>
                Email: <span>jane@gmail.com</span>
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
