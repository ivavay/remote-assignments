export default function Nav() {
    return(
        <div>
            <ul>
            <li className="logo">Website Title / Logo</li>
            <li className="nav-item">Item 1</li>
            <li className="nav-item">Item 2</li>
            <li className="nav-item">Item 3</li>
            <li className="nav-item">Item 4</li>
            <div className="hamburger-menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="opened-menu">
                <div className="exit-menu"><img className="exit" src="images/exit.png" alt="exit" /></div>
                <ul className="min-menu">
                    <li className="li-items">Item 1</li>
                    <li className="li-items">Item 2</li>
                    <li className="li-items">Item 3</li>
                    <li className="li-items">Item 4</li>
                </ul>
            </div>
        </ul>
        </div>
    )
}