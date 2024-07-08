import { useState } from "react"
import { useRef } from 'react';
import exit from '../assets/exit.png'
export default function Nav() {
    const openMenu = useRef(null);
    const exitMenu = useRef(null);
    const menu = useRef(null);

    const [toggle, setToggle] = useState(true)
    function toggleMenu() {
        console.log(toggle)
        // openMenu.current.style.display = 'block'

        if (toggle) {
            setToggle(!toggle)
            console.log("menu is open") 
            console.log(toggle)
            menu.current.style.display = 'none'
            openMenu.current.style.display = 'block'
            exitMenu.current.style.display = 'block'
        } else {
            setToggle(!toggle)
            console.log("menu is not open")
            console.log(toggle)
            menu.current.style.display = 'flex'
            openMenu.current.style.display = 'none'
            exitMenu.current.style.display = 'none'
        }
    }
    return(
        <nav>
            <ul>
            <li className="logo">Website Title / Logo</li>
            <li className="nav-item">Item 1</li>
            <li className="nav-item">Item 2</li>
            <li className="nav-item">Item 3</li>
            <li className="nav-item">Item 4</li>
            <div onClick={toggleMenu} ref={menu} className="hamburger-menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div ref={openMenu} className="opened-menu">
                <div ref={exitMenu} onClick={toggleMenu} className="exit-menu"><img className="exit" src={exit} alt="exit" /></div>
                <ul className="min-menu">
                    <li className="li-items">Item 1</li>
                    <li className="li-items">Item 2</li>
                    <li className="li-items">Item 3</li>
                    <li className="li-items">Item 4</li>
                </ul>
            </div>
        </ul>
        </nav>
    )
}