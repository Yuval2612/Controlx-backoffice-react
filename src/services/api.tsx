import axios from 'axios';

export default axios.create({
    baseURL: `http://10.211.55.3:82/`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});