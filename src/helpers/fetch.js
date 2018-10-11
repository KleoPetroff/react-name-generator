import axios from 'axios';

export default function() {
  return axios.get('https://uinames.com/api/').then(response => {
    return response.data;
  });
}
