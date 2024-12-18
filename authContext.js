import { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  // Fonction pour se connecter
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/session', {
        email,
        password,
      });
      const token = response.data.access_token;

      // Stocker le token dans les cookies
      setCookie('access_token', token, { path: '/' });
      // Optionnel : récupérer les infos utilisateur
      const userData = await fetchProfile(token);
      setUser(userData);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Fonction pour récupérer le profil utilisateur
 {/* const fetchProfile = async (token) => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/get_profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      return null;
    }
  }; */}

  // Déconnexion
  const logout = () => {
    removeCookie('access_token', { path: '/' });
    setUser(null);
  };

  // Vérifier la session à chaque chargement
  useEffect(() => {
    const token = cookies.access_token;
    if (token) {
      fetchProfile(token).then((userData) => {
        if (userData) setUser(userData);
      });
    }
  }, [cookies]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
