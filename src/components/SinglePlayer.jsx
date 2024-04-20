import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchsinglePlayer } from "../API";
import { deleteplayer } from "../API";
export default function Singleplayer() {
  const { id } = useParams();
  console.log(id);
  const [oneplayer, setoneplayer] = useState(null);
  useEffect(() => {
    async function fetchplayer() {
      try {
        const response = await fetchsinglePlayer(id);
        setoneplayer(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchplayer();
  }, [id]);
  async function handleDelete() {
    try {
      const response = await deleteplayer(id);
      console.log("Player deleted:", response);
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  }

  return (
    <>
      <h1>Singleplayer</h1>
      <p>{id}</p>
      {oneplayer && (
        <div>
          <ul>
            <img src={oneplayer.imageUrl} />
            <li>Name: {oneplayer.name}</li>
            <li>Breed: {oneplayer.breed}</li>
          </ul>
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={handleDelete}
          >
            Delete Player
          </button>
        </div>
      )}
    </>
  );
}
