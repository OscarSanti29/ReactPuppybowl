import { useState } from "react";
import { newplayer } from "../API";

export default function Newplayerform() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await newplayer({ name, breed });
      console.log("New player added:", response);
      setName("");
      setBreed("");
    } catch (error) {
      console.error("Error adding player:", error);
    }
  }

  return (
    <div>
      <h1>Create Player</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Breed:
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}
