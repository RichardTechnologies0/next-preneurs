import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header(){

const [isMenuOpen,setIsMenuOpen]=useState(false);

function toggleMenu (){
    setIsMenuOpen(!isMenuOpen);
};

return (
     <header className="bg-blue-600 shadow-md text-white py-4">
        <div className="container mx-auto flex items-center px-6 justify-between">
        <div className="text-xl font-bold">
       
            <a>Next-Preneurs</a>
          
       

            </div>

            <nav className="hidden md:flex space-x-6">
           
            <a href="./" className="hover:text-gray-300">
        <i className="fa fa-home"></i>
      </a>

      {/* Lien vers les messages */}
      <a href="./message" className="hover:text-gray-300">
        <i className="fa fa-envelope"></i>
      </a>

      {/* Lien vers les notifications */}
      <a href="./notification" className="hover:text-gray-300">
        <i className="fa fa-bell"></i> 
      </a>

      {/* Lien vers la création de nouveaux posts */}
      <a href="./newPost" className="hover:text-gray-300">
        <i className="fa fa-plus"></i>
      </a>

      {/* Lien de déconnexion */}
      <a href="/" className="hover:text-gray-300 flex items-center">
        <i className="fa fa-close mr-2"></i> 
      </a>
         
            </nav>


        <button className="md:hidden text-white" onClick={toggleMenu}>
            <i className="fa fa-bars text-xl"/>
        </button>
         </div>

         {isMenuOpen && (
          <div className="md:hidden bg-blue-700 py-4">
            <nav className="flex flex-col items-center space-y-4">

              <a href="./" className="text-white">Home</a>
              <a href="./newPost" className="text-white">New Posts</a>
              
              <a href="/" className="text-white">Deconnexion</a>
            </nav>
          </div>
         )}
     </header>
);

};

export default  Header;