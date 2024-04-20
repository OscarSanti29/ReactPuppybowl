import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/players/ :id">Singleplayer</Link>
        <Link to="/newplayerform">Newplayer</Link>
      </div>
    </div>
  );
}
