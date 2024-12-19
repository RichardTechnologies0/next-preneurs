'use client';
import axios from "axios";
import { useEffect, useState } from "react";

function UserCard({ email }) {
  const [user, setUser] = useState([]); // Pour stocker la liste des utilisateurs

  // Fonction pour ajouter un ami
  const addFriends = async (key, nom, occupation, url) => {
    try {
      const response = await axios.post('https://next-preneurs-api-python.onrender.com/api/add_friends', {
        email,
        key,
        nom,
        occupation,
        url,
      });
      alert("Ami ajouté !");
    } catch (error) {
      console.error("Une erreur est survenue lors de l'ajout de l'ami", error);
      alert("Erreur lors de l'ajout de l'ami !");
    }
  };

  // Appel de l'API pour récupérer les utilisateurs au montage du composant
  useEffect(() => {
    axios
      .get('https://next-preneurs-api-python.onrender.com/api/friends')
      .then((response) => {
        setUser(response.data); // Met à jour l'état avec les données des utilisateurs
      })
      .catch((error) => {
        console.error("Une erreur est survenue lors de la récupération des utilisateurs", error);
      });
  }, []); // Ajoutez un tableau vide pour appeler cette fonction une seule fois au montage

  return (
    <div className="container mx-auto p-4">
      {user.length > 0 ? (
        user.map((item, index) => (
          <div
            key={index} // Utilisation de l'index pour chaque élément
            className="bg-white shadow-md rounded-lg p-8 w-80 mx-auto mb-8 flex items-center"
          >
            <img
              src={item.url}
              alt="user"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <a href="#" className="font-semibold text-lg text-blue-500 hover:text-blue-700">
                {item.nom}
              </a>
              <p className="text-sm text-gray-500">{item.occupation}</p>
              <button
                onClick={() => addFriends(item.email, item.nom, item.occupation, item.url)}
                className="p-2 m-4 text-white bg-blue-500 rounded-full hover:text-green-500"
              >
                <i className="fa fa-plus"></i> Collaborer
              </button>
            </div>
          </div>
        ))
      ) : (
        // Si aucun utilisateur n'est trouvé, afficher un message
        <p className="text-center text-gray-500">Aucun utilisateur trouvé.</p>
      )}
    </div>
  );
}

export default UserCard;
