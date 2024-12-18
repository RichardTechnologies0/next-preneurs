'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import { useMyContext } from "./context/MyContext";


export default function NewPpost(){
  const { email, nom, url, occupation } = useMyContext();
  const [nomPost,setNom]=useState('');
    const [image,setImage]=useState('');
    const [description,setDescription]=useState('');
    const [responseMessage,setResponseMessage]=useState('');

    const handlePost=async(e)=>{

        e.preventDefault();
       
       try{
        const response=await axios.post("http://127.0.0.1:5000/api/send-post",{description,image_url:image,nom:nom,});
        alert("Publication fait");
        setResponseMessage(response.data.message);
       }catch(error){
        alert("Erreur de systeme",{error});
        setDescription('');
        setImage('');
        setResponseMessage("Une erreur est survenue lors de l'envoie des informations");
       }
    };
    return (
        <div className="bg-gray-100 flex flex-col rounded-lg shadow-lg sm:flex-row mx-auto justify-center items-center p-6 max-w-4xl mt-10">
         
          <div className="w-full text-center mb-4 sm:mb-0 sm:mr-6">
            <h2 className="text-2xl font-semibold text-blue-500">Ajouter une publication</h2>
          </div>
        
          <div className="w-full">
            <form
              onSubmit={handlePost}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col space-y-4"
            >
              
              <label className="block text-gray-700 font-medium">
                Url de l'image
              </label>
              <input
                type="text"
                value={image}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                onChange={(e) => setImage(e.target.value)} 
              />
    
              
              <label className="block text-gray-700 font-medium">Description</label>
              <textarea
                rows={5}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
                placeholder="Ajoutez une description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
    
             
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md w-full"
              >
                Créer Post
              </button>
            </form>
          </div>
        </div>
      );
}