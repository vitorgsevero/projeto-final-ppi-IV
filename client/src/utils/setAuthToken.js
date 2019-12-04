import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.commom['x - auth - token'] = token;
  } else {
    delete axios.defaults.headers.commom['x-auth-token'];
  }
};

export default setAuthToken;
