import './header.css';
import {useState, useEffect} from "react";

const header = () => {

    // header scroll bg change
    const [hasScrolled, setHasScrolled]= useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);



    // menu open close
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <div>
        <div className={`header ${hasScrolled ? "shadow" : ""}`}>
            <div className="nav container">
                <a href="#" className="logo">LeChair</a>
                
                <div className={`navbar ${isMenuOpen ? "open-menu" : ""}`}>
                    <a href="#chair" className="nav-link">Furniture</a>
                    <a href="#" className="nav-link">Projects</a>
                    <a href="#chair" className="nav-link">Products</a>
                    <a href="#about" className="nav-link">About Us</a>
                    <a href="#" className="register-btn btn">Register</a>
                </div>

                <div className={`menu-icon ${isMenuOpen ? "move" : ""}`}
                onClick={toggleMenu}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default header