
import axios from "axios";
import { useState } from "react";

export default function ChatIA() {
  const [idea, setIdea] = useState("");
  const [responseAI, setResponseAI] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true); 
    setResponseAI(""); 

    try {
      const response = await axios.post("https://next-preneurs-api-python.onrender.com/api/chatAI", {
        idea,
      });
      setResponseAI(response.data.prediction); 
    } catch (error) {
      console.error("Erreur de système", error);
      setResponseAI("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false); 
    }
  };

  return (

     <>
      <div className="w-50 sm:m-20 container mx-auto mx-4">
        <div className="bg-white shadow-md p-4 rounded-md hover:shadow-lg transition-all">
          <h2 className="text-lg font-medium text-gray-800">
            NEXT-PRENEUR AI
          </h2>
          {/* Affiche un indicateur de chargement ou la réponse générée */}
          {loading ? (
            <p className="text-gray-600">ChatIA</p>
          ) : (
            <p className="text-gray-600">
              {responseAI || "Aucune réponse pour le moment."}
            </p>
          )}
        </div>
      </div>

      <div className="w-50 sm:m-10 container mx-auto mx-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Entrez votre idée ici..."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <button
            type="submit"
            className="p-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white rounded-xl"
          >
            PREDICTION
          </button>
        </form>
      </div>
      </>
  );
}
