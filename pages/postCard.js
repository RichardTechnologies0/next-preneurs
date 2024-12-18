'use client';
import axios from "axios";
import { useEffect, useState } from "react";

function PostCard(){

  const [post,setPost]=useState([]);

  useEffect(()=>{
          axios.get('http://127.0.0.1:5000/api/post')
          .then(response=>{
            setPost(response.data);
          })
          .catch(error=>{
            console.error("Une erreur lors de la recuperation de les publicaations",error);
          });
  });

    return(
      <div className="container mx-auto p-4">

        {post.map(item=>(
                   <div className="bg-white mx-auto items-center w-80 shadow-md rounded-lg p-4 mb-6">
                   <div className="flex justify-between items-center">
                       <a className="text-semibold text-lg hover:text-blue-500">{item.author}</a>
                       <span className="text-sm text-gray-500">{item.datetime}</span>
                   </div>
       
                   <div className="mt-4 flex justify-center">
         <img
           src={item.image_url}
           alt="user"
           className="w-36 h-36 rounded-full object-cover"
         />
       </div>
       
       
                   <div className="mt-2 text-gray-700">
                      <p>{item.content}</p>
                   </div>
       
                   <div className="mt-4 flex space-x-4">
                       <button className="text-blue-500 hover:text-blue-700">J'aime</button>
                       <button className="text-blue-500 hover:text-blue-700">Commenter</button>
                       <button className="text-blue-500 hover:text-blue-700">Partager</button>
                   </div>
                </div>
        ))}
      </div>

    );
}

export default PostCard;