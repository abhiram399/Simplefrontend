import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./nav.css";

export default function Nav() {
  return (
    <>
      <div className="navContainer">
        <h1>My Navigation</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
        </div>
      </div>
    </>
  );
}
