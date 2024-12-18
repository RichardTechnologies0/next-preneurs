import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [url, setUrl] = useState("");
  const [occupation, setOccupation] = useState("");
  const [friends, setFriends] = useState("");
  const [cookies, setCookies] = useCookies([]);
  const router = useRouter(); 
  const login = async ({ email, password }) => {
    try {
     
      const response = await axios.post("http://127.0.0.1:5000/api/session", {
        email,
        password,
      });

      
      const { nom, url, occupation, friends, access_token } = response.data;

      setEmail(email);
      setNom(nom);
      setUrl(url);
      setOccupation(occupation);
      setFriends(friends);

      
      setCookies("access_token", access_token, {
        path: "/",
        maxAge: 3600, 
        secure: process.env.NODE_ENV === "production", 
      });

     
      router.push("/accueil");
    } catch (error) {
      
      if (error.response) {
        console.error("Erreur côté serveur :", error.response.data);
        alert(`Erreur : ${error.response.data.message || "Erreur serveur"}`);
      } else {
        console.error("Erreur réseau ou autre :", error.message);
        alert("Une erreur réseau est survenue, veuillez réessayer.");
      }
    }
  };

  return (
    <MyContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        nom,
        setNom,
        url,
        setUrl,
        occupation,
        setOccupation,
        friends,
        setFriends,
        login, // Ajout de la fonction login au contexte
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
