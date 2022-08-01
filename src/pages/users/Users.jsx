import classes from './Users.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../data/users';

const Users = () => {
  const actions = [
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: () => {
        return (
          <div className={classes.btnGroup}>
            <button className={classes.view}>View</button>
            <button className={classes.delete}>Delete</button>
          </div>
        );
      },
    },
  ];

  return (
    <div className={classes.users}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actions)}
        pageSize={10}
        // rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Users;
