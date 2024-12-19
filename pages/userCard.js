'use client';
import axios from "axios";
import { useEffect, useState } from "react";

function UserCard({email}){

   const [user,setUser]=useState([]);
   const [friends,setFriends]=useState('');
   const addFriends =async(key)=>{
        try{
          const response = await axios.post('https://next-preneurs-api-python.onrender.com/api/add_friends', {
            key: key, 
            email: {email}, 
          });
         
          alert("Friends ajouter");
        }catch(error){
          console.error("Une erreur lors d'ajout de friend",error);
        }
   };

   useEffect(()=>{
        axios.get('http://127.0.0.1:5000/api/friends')
        .then(response=>{
            setUser(response.data);
        })
        .catch(error=>{
         console.error("Une est survenue lor de la recuperations des Utilisateurs",error);
        });
   });

    return (
      <div className="container mx-auto p-4">
      
      {user.map(item=>(
             
       <div className="bg-white shadow-md rounded-lg p-8 w-80 mx-auto mb-8 flex items-center">
           
       <img src={item.url} alt="user" className="w-16 h-16 rounded-full items-center object-cover mr-4" />

       <div>
         <a className="font-semibold text-lg text-blue-500 hover:text-blue-700">{item.nom}</a>
         <p className="text-sm text-gray-500">{item.occupation}</p>
         <div className="flex">
         <button key={item.id_user}
  onClick={()=>addFriends(item.id_user)} 
  className="p-2 m-4 mr-auto text-white bg-blue-500 rounded-full hover:text-green-500 end-0"
>
  <i className="fa fa-plus"></i>
</button> </div>

       </div>
    </div>
    ))}
    </div>
      

    );

}

export default UserCard;
