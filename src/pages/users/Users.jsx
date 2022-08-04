import { useContext } from 'react';
import ThemeContext from '../../store/context';
import { Link } from 'react-router-dom';
import classes from './Users.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../data/users';

const Users = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className={`${classes.users} ${themeCtx.dark && classes.dark}`}>
      <div className={classes.title}>
        <h1>All Users</h1>
        <Link to='new'>New User</Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Users;
