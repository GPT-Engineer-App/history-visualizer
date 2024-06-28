import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/learn" className="text-white">Learn</Link>
        </li>
        <li>
          <Link to="/relationships" className="text-white">Relationships</Link>
        </li>
        <li>
          <Link to="/timelines" className="text-white">Timelines</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;