import axios from 'axios';
const API_URL='https://file-sharing-app-hkh1.vercel.app/';

export const uploadFile=async(data) => {
    try{
   let response=  await axios.post('/upload', data);
   return response.data;
    }catch(error){
        console.error('Error while calling the api',error.message);
    }
}