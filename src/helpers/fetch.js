import axios from 'axios';

export default function() {
  return axios.get('https://cors.io/?https://uinames.com/api').then(response => {
    return response.data;
  });
}
