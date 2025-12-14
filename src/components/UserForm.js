import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../features/users/usersSlice';
import './UserForm.css';

const UserForm = ({ userToEdit, onEditComplete }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(userToEdit || { name: '', email: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Required';
    if (!form.email.trim()) err.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Invalid';
    setErrors(err);
    return !Object.keys(err).length;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(userToEdit ? updateUser(form) : addUser(form));
    setForm({ name: '', email: '' });
    onEditComplete?.();
  };

  return (
    <div className="form-container">
      <h2>{userToEdit ? 'Edit' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {userToEdit ? 'Update' : 'Add'}
          </button>
          {userToEdit && (
            <button type="button" className="btn btn-secondary" onClick={onEditComplete}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
