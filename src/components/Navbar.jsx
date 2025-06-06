import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar_links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}