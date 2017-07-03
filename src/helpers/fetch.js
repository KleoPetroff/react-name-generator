import axios from 'axios';

export default function() {
  return axios.get('http://uinames.com/api/').then(response => {
    return response.data;
  });
}