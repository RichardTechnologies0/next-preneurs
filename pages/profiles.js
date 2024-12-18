
import { useEffect, useState } from 'react';
import { useMyContext } from '@/context/MyContext';
export default function ProfilePage() {
  // Extraction des valeurs du contexte
  const { email, nom, url, occupation } = useMyContext();
  const [newEmail,setEmail]=useState('');
  const [newNom,setNom]=useState('');
  const [newUrl,setUrl]=useState('');
  const [newOccupation,setOccupation]=useState('');

  useEffect(()=>{
    setEmail(email);
    setNom(nom);
    setUrl(url);
    setOccupation(occupation);
  });

  return (
    <div className="bg-white mx-auto mt-32 flex flex-col sm:flex-row justify-center items-center shadow-lg rounded-lg p-6 max-w-lg">
      {/* Image de profil */}
      <div className="mb-4 sm:mb-0 sm:mr-4">
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
      </div>
    </div>
  );
}
