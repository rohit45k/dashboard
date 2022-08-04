import classes from './Users.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../data/users';

const Users = () => {
  return (
    <div className={classes.users}>
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
