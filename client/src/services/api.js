import axios from 'axios';
const API_URL='https://file-sharing-app-hkh1.vercel.app/';

export const uploadFile=async(data) => {
    try{
   let response=  await axios.post('https://file-sharing-app-hkh1.vercel.app/upload', data);
   return response.data;
    }catch(error){
        console.error('Error while calling the api',error.message);
    }
}