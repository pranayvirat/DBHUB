import {useState} from "react"
import "../navbar.css"
import {Link} from "react-router-dom"
import styles from "./styles.module.css"

export default function Navbar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

    return(
        <nav className="navigation">
            <a href="/" className="brand-name">
                DBHUB
            </a>
            <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded)}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
            </button>
            <button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
            <div 
             className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"} >
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <a href="/postgresql">PostgreSQL</a>
                    </li>
                    <li>
                        <a href="/mysql">MySQL</a>
                    </li>
                    <li>
                        <a href="/aws">AWS</a>
                    </li>
                    <li>
                        <a href="/mongodb">MongoDB</a>
                    </li>
                    <li>
                        <a href="/manageConnections">Manage Connections</a>
                    </li>
                    <li>
                        <a href="/getData">Centralized Data</a>
                    </li>
                </ul>
             </div>
        </nav>
    );
}