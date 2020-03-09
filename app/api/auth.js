import axios from 'axios';

const authApi = {
  getToken: async () => axios.get('https://api.themoviedb.org/3/authentication/token/new?api_key=03b8572954325680265531140190fd2a')
};
export {authApi}