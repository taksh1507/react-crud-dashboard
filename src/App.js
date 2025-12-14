import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFromAPI, clearError } from './features/users/usersSlice';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  const [userToEdit, setUserToEdit] = useState(null);

  // Fetch users from API on component mount
  useEffect(() => {
    dispatch(getUsersFromAPI());
  }, [dispatch]);

  const handleEditClick = (user) => {
    setUserToEdit(user);
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditComplete = () => {
    setUserToEdit(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>React CRUD Dashboard</h1>
          <p className="header-subtitle">Manage Users with Redux Toolkit</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          {/* Error Message */}
          {error && (
            <div className="alert alert-error">
              <strong>Error:</strong> {error}
              <button
                className="alert-close"
                onClick={() => dispatch(clearError())}
              >
                ×
              </button>
            </div>
          )}

          {/* Loading Indicator */}
          {loading && (
            <div className="alert alert-info">
              <span className="spinner"></span> Loading users from API...
            </div>
          )}

          {/* Form Section */}
          <UserForm userToEdit={userToEdit} onEditComplete={handleEditComplete} />

          {/* Table Section */}
          <UserTable users={users} onEditClick={handleEditClick} />
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 React CRUD Dashboard. Built with React & Redux Toolkit.</p>
      </footer>
    </div>
  );
}

export default App;
