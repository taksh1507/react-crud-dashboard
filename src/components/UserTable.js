import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../features/users/usersSlice';
import './UserTable.css';

const UserTable = ({ users, onEditClick }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(id));
    }
  };

  if (users.length === 0) {
    return (
      <div className="table-container">
        <p className="no-data">No users found. Add a new user to get started!</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <h2>Users Dashboard</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="actions-cell">
                <button
                  className="btn btn-edit"
                  onClick={() => onEditClick(user)}
                  title="Edit user"
                >
                  Edit
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => handleDelete(user.id)}
                  title="Delete user"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
