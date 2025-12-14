import axios from 'axios';

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
  } catch (err) {
    throw new Error('API fetch failed');
  }
};
