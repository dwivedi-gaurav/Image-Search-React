import Axios from 'axios';

const unsplash=Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID d4b6a861ef15c1bd2554f6b1463e48c70e275dcf985596a4b91d21c59535f477'
    }
  }
);

export default unsplash;