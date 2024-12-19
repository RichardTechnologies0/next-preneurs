'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function Friends({ email }) {
  const [user, setUser] = useState([]); 
  const [cookies, setCookies] = useCookies([]);

  useEffect(() => {
    
    if (email) {
      handleSuivi();
    }
  }, [email]); 

  const handleSuivi = async () => {
    try {
      const response = await axios.post("https://next-preneurs-api-python.onrender.com/api/suivi", {
        email,
      });
      setUser(response.data); // Met à jour l'état avec les données reçues
    } catch (error) {
      console.error("Erreur de requête :", error);
      setUser([]); // Réinitialise l'état en cas d'erreur
    }
  };

  return (
    <div className="container mx-auto p-4">
      {Array.isArray(user) && user.length > 0 ? ( 
        user.map((item, index) => (
          <div
            key={index} 
            className="bg-white shadow-md rounded-lg p-8 w-80 mx-auto mb-8 flex items-center"
          >
            <img
              src={item.url}
              alt="user"
              className="w-16 h-16 rounded-full items-center object-cover mr-4"
            />
            <div>
              <a
                href="#"
                className="font-semibold text-lg text-blue-500 hover:text-blue-700"
              >
                {item.nom}
              </a>
              <p className="text-sm text-gray-500">{item.occupation}</p>
            </div>
          </div>
        ))
      ) : (
        
        <div className="container mx-auto items-center">
          <button 
            className="p-4 m-4 bg-blue-500 text-white items-center rounded-full"
            onClick={() => handleSuivi()}
          >
            Voir vos Collaborateurs
          </button>
          <p className="text-center text-gray-500">Aucun utilisateur trouvé.</p>
        </div>
      )}
    </div>
  );
}

export default Friends;
