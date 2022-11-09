import { Link } from "react-router-dom";     // <== IMPORT

function Nav() {
return (
    <nav className="Navbar">
        <ul>
            <Link to="/about-us"> About Us </Link>           {/* <== ADD */}
            <Link to="/our-clients"> Our Clients </Link>      {/* <== ADD */}
            <Link to="/projects"> Projects </Link>  {/* <== ADD */}
        </ul>
    </nav>
);
}

export default Nav;
