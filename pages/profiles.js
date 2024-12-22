

import { useEffect, useState } from 'react';
import { useMyContext } from '@/context/MyContext';
export default function ProfilePage() {
  // Extraction des valeurs du contexte
  const { email, nom, url, occupation } = useMyContext();
  const [newEmail,setEmail]=useState('');
  const [newNom,setNom]=useState('');
  const [newUrl,setUrl]=useState('');
  const [newOccupation,setOccupation]=useState('');
  const [isMenuOpen,setIsMenuOpen]=useState(false);

  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(()=>{
    setEmail(email);
    setNom(nom);
    setUrl(url);
    setOccupation(occupation);
  });

  return (
    <div >
    <div className="grid lg:grid-cols-4  sm:flex-row md:grid-cols-2  gap-4 bg-white mx-auto lg:mt-32 flex lg:flex-col justify-center items-center lg:shadow-lg rounded-lg p-6 max-w-50">
      {/* Image de profil */}
      <div className="mb-4 flex justify-center items-center  sm:mx-auto">
        <img
          src={newUrl || "https://via.placeholder.com/150"}
          alt="Photo de profil"
          className="w-36 h-36 rounded-full object-cover"
        />
      </div>

      {/* Informations sur le profil */}
      <div className="text-center sm:text-left">
        <h4 className="font-semibold text-lg text-blue-500 hover:text-blue-700">
          {newNom || "Nom non disponible"}
        </h4>
        <p className="text-sm text-gray-500">{newEmail || "Email non spécifié"}</p>
        <p className="text-sm text-gray-500">{newOccupation || "Occupation non spécifiée"}</p>
        <p className='text-sm text-blue-400'>Investisseur</p>

      </div>

      <div className=''>
          <p className='text-gray-500 text-sm'>Objectifs de l'entrepreneur avec son statut </p>
      </div>
    </div>
    <div className='flex justify-center m-2 p-2 items-center' onClick={toggleMenu}>
            <button className='text-blue-500 md:hidden'>
              <i className='text-lg fa fa-bars'></i>
            </button>
    </div>
    <nav className='hidden md:flex justify-center divide-x divide-blue-500 items-center space-x-4'>
               <a className='text-blue-500 hover:text-green-700 font-bold ' href='#'>Projets Realises</a>
               <a className='text-blue-500 hover:text-green-700 font-bold ml-lg' href='#'>Etudes de cas</a>
               <a className='text-blue-500 hover:text-green-700 font-bold ml-lg' href='#'>Certifications</a>
               <a className='text-blue-500 hover:text-green-700 font-bold ml-lg' href='#'>Evenements / Webinaires</a>
               <a className='text-blue-500 hover:text-green-700 font-bold ml-lg' href='./message'>ChatIA</a>
               <a href="./newPost" className="hover:text-gray-300 rounded-full border ml-lg outline outline-offset-2 text-blue-500 m-2 p-2 border-blue-500">
             <i className="fa fa-plus"></i>Add Post
           </a>
           </nav>
    <div >
      {isMenuOpen &&(
               <nav className='flex flex-col items-center space-y-4'>
               <a className='text-blue-500 hover:text-green-700 font-bold ' href='#'>Projets Realises</a>
               <a className='text-blue-500 hover:text-green-700 font-bold ' href='#'>Etudes de cas</a>
               <a className='text-blue-500 hover:text-green-700 font-bold mx-auto' href='#'>Certifications</a>
               <a className='text-blue-500 hover:text-green-700 font-bold ' href='#'>Evenements / Webinaires</a>
               <a href="./newPost" className="hover:text-gray-300 rounded-full border outline outline-offset-2 text-blue-500 m-2 p-2 border-blue-500">
             <i className="fa fa-plus"></i>Add Post
           </a>
           </nav>
      )}
    </div>
  
      <div className='mx-auto shadow-xl max-w-lg flex justify-center items-center'>
        <input type='text' placeholder='Rechercher' className='p-2 m-2 border border-gray' /> 
        <button className='m-4 p-2 bg-blue-500 hover:bg-blue-800 text-white rounded-full'><i className='fa fa-search m-2'></i>Rechercher</button>
      </div>
      
    </div>
  );
}
