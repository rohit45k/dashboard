import { Link } from 'react-router-dom';
import classes from './Users.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { userRows } from '../../data/users';

const Users = () => {
  return (
    <TableContainer component={Paper} className={classes.users}>
      <h3>All Users</h3>
      <Table sx={{ minWidth: 650 }} aria-label='Users Table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userRows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <div className={classes.user}>
                  <img src={row.img} alt='' className='image' />
                  {row.username}
                </div>
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>
                <span
                  className={
                    row.status === 'active'
                      ? classes.active
                      : row.status === 'pending'
                      ? classes.pending
                      : classes.passive
                  }
                >
                  {row.status}
                </span>
              </TableCell>
              <TableCell>
                <div className={classes.btnGroup}>
                  <Link to={`${row.id}`} className={classes.view}>
                    View
                  </Link>
                  <button className={classes.delete}>Delete</button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Users;
