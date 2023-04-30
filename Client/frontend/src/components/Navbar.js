import {useState} from "react"
import "../navbar.css"
import {Link} from "react-router-dom"


export default function Navbar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false)


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
            <div 
             className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"} >
                <ul>
                    <li>
                   <Link to="/" style={{
                            textDecoration:"none",
                            color:"black"
                        }}>Home</Link>
                    </li>
                    {/* <li>
                        <Link style={{
                            textDecoration:"none",
                            color:"black"
                        }} to="/about">About</Link>
                    </li> */}
                    <li>
                        {/* <a href="/postgresql" style={{
                            textDecoration:"none",
                            color:"black"
                        }}>PostgreSQL</a> */}
                        <Link to="/postgresql" style={{
                            textDecoration:"none",
                            color:"black"
                        }}>PostgreSQL</Link>
                    </li>
                    <li>
                        <Link to="/mysql" style={{
                            textDecoration:"none",
                            color:"black"
                        }}>MySQL</Link>
                    </li>
                    <li>
                        <Link to="/aws" style={{
                            textDecoration:"none",
                            color:"black"
                        }}>AWS</Link>
                    </li>
                    <li>
                        <Link to="/mongodb" style={{
                            textDecoration:"none",
                            color:"black"
                        }}>MongoDB</Link>
                    </li>
                    <li>
                        <Link to="/manageConnections" style={{
                            textDecoration:"none",
                            color:"black"
                        }}>Manage Connections</Link>
                    </li>
                    <li>
                        <Link to="/getData" style={{
                            textDecoration:"none",
                            color:"black"
                        }}>Centralized Data</Link>
                    </li>
                </ul>
             </div>
        </nav>
    );
}
