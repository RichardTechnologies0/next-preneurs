import axios from "axios";
import { useState } from "react";



export default function Signin(){

    const [nom,setNom]=useState('');
    const [url,setUrl]=useState('');
    const [occupation,setOccupation]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [responseMessage,setResponseMessage]=useState('');

    const handlePostCompte=async(e)=>{
        e.preventDefault();

        if(!email || !nom || !url || password!=confirmPassword){
            setResponseMessage("Les informations sont incorrrects");
        }else{
            try{
                const response=await axios.post('https://next-preneurs-api-python.onrender.com/api/signin',{nom,occupation,email,password,url,});
                setResponseMessage(response.data.message);
               }catch(error){
                   alert("Erreur lors de la creation de compte",error);
                   setNom('');
                   setOccupation('');
                   setEmail('');
                   setPassword('');
               }
        }

    };
    return (
        <div className="bg-gray-100 flex flex-col rounded-lg shadow-lg sm:flex-row mx-auto justify-center items-center p-6 max-w-4xl mt-10">
              <p className="bg-green font-semibold text-8 text-center">{responseMessage} </p>
            <div className="w-full">
                <form onSubmit={handlePostCompte} className="bg-white shadow-lg space-y-4 flex flex-col p-6 mt-10 border border-gray-300 border-radius-10">
                         <input type="text" className="w-full block m-4 p-4 border border-gray-200" placeholder="Jean maraino" value={nom} onChange={(e)=>setNom(e.target.value)} />
                         <input type="text" className="w-full block m-4 p-4 border border-gray-200" placeholder="Profession,activite" value={occupation} onChange={(e)=>setOccupation(e.target.value)} />
                         <input type="text" className="w-full block m-4 p-4 border border-gray-200" placeholder="Url du profile" value={url} onChange={(e)=>setUrl(e.target.value)} />
                         <input type="email" className="w-full block m-4 p-4 border border-gray-200" placeholder="email@exemple.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
                         <input type="password" className="w-full block m-4 p-4 border border-gray-200" placeholder="Votre mot de passe" value={password} onChange={(e)=>setPassword(e.target.value)} />
                         <input type="password" className="w-full block m-4 p-4 border border-gray-200" placeholder="Confirmer le mot de passe" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                         <button type="submit"  className="w3-full m-8 p-6 text-white rounded-lg bg-blue-500 hover:bg-blue-700">CREER UN COMPTE</button>
                </form>
            </div>
        </div>
    );
}
