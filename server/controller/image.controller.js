import File from "../models/file.js";
import bcrypt from 'bcrypt';

export const uploadImage=async (request,response)=>{
    const fileObj={
        path:request.file.path,
        name:request.file.originalname
    }
    try{
      const file= await File.create(fileObj);
      response.status(200).json({ path: `https://file-sharing-app-hkh1.vercel.app/file/${file._id}`});
     
      console.log("hiii");
    }
    catch(error){
        console.error(error.message);
        response.status(500).json({error:error.message})
    }
 
}
export const downloadImage = async(request,response) =>{
    try{
   const file = await  File.findById(request.params.fileId);
   file.downloadCount++;
   await file.save();
   response.download(file.path,file.name);
    }catch(error){
       console.error(error.message);
       return response.status(500).json({error:error.message}); 
    }
}