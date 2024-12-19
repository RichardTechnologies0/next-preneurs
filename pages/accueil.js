import UserCard from "./userCard";
import Header from "./header";
import PostCard from "./postCard";
import Footer from "./footer";
import {useState,useEffect} from "react";
import ProfilePage from "./profiles";
import { useMyContext } from "@/context/MyContext";
import Friends from "./friends";

export default function Accueil(){
    const {email,setEmail}=useMyContext();
    const {nom, setNom} = useMyContext();
    const {url, setUrl} = useMyContext();
    const {occupation, setOccupation} = useMyContext();
  
    return (
  
        <div className="min-h-screen flex flex-col">
           
      <Header />
  
      <div className="container mx-auto w-full">
      <div>

        <ProfilePage />

    </div>
      </div>
     
      <div className="grid gap-6 mt-32 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8">
        
       
        <div className="shadow-xl hover:bg-gray-300">
          <h2 className="text-xl text-center mb-8 bg-blue-500 text-white font-semibold">
            Relations Entrepreneuriales
          </h2>
        
              <UserCard email={email}  />
       
        </div>
  
      
        <div className="shadow-xl hover:bg-gray-300">
          <h2 className="text-xl text-center text-white bg-blue-500 font-semibold">
            Publications
          </h2>
          <PostCard />
        </div>
  
     
        <div className="shadow-xl hover:bg-gray-300">
          <h2 className="text-xl text-center text-white bg-blue-500 font-semibold">
           Projet ET Collaboration
          </h2>
         <Friends email={email} />
        </div>
      </div>
  
      <Footer /></div>
  
    );
}
