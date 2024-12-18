import { useState } from 'react';
import { useMyContext } from '@/context/MyContext';

export default function LoginPage() {
 const {login}=useMyContext();
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState('');
 const [error,setError]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Veuillez remplir tous les champs !");
      return;
    }

    try {
      // Appeler la fonction login du contexte
      await login({ email, password });
    } catch (err) {
      // Si une erreur survient
      setError("Identifiants incorrects. Veuillez réessayer.");
    }
   
  };
  
  return (
    <div className="bg-gray-100 flex flex-col rounded-lg shadow-lg sm:flex-row mx-auto justify-center items-center p-6 max-w-4xl mt-10">
    
    <div className="w-full text-center mb-4 sm:mb-0 sm:mr-6">
            <h2 className="text-2xl font-semibold text-blue-500">NEXT-PRENEURS </h2>
    </div>

    <div className='w-full'>
           
    <form onSubmit={handleSubmit} className="bg-white border border-gray-300 border-radius-10 flex flex-col p-6 rounded-lg space-y-4">
  
<input type="email" className="w-full block m-4 p-4 border border-gray-300 " placeholder="courriel@exemple.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
<input type="password" className="w-full block m-4 p-4 border border-gray-300" placeholder="Entrer votre mot de passe" value={password} onChange={(e)=>setPassword(e.target.value)} />

<button className="bg-blue-500 w-full hover:bg-blue-700 p-4 m-4 rounded-xl text-white font-semibold">OUVRIR UNE SESSION</button>
<a href="./signing" className="text-blue-400 hover:text-blue700 font-bold ">Creer un compte</a>
</form>
{error && <p style={{ color: "red" }}>{error}</p>}
    </div>

</div>
  );
}
