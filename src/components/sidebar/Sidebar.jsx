import "./sidebar.css"
import imggirl from "../../assets/girlimg.jpg"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    About Me
                </span>
                <img src={imggirl} alt="loading" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur eius praesentium voluptatibus beatae,
                    velit sapiente facere.
                    uatur eius praesentium voluptatibus beatae,
                    velit sapiente facere.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Tech</li>
                        <li className="sidebarListItem">WEB</li>
                        <li className="sidebarListItem">Machine Learning</li>
                        <li className="sidebarListItem">Android</li>
                        <li className="sidebarListItem">AR / VR</li>
                        <li className="sidebarListItem">Gaming</li>
                        <li className="sidebarListItem">DSA</li>
                    </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className=" sidebarIcon fab fa-facebook-square"></i>
                    <i className=" sidebarIcon fab fa-twitter-square"></i>
                    <i className=" sidebarIcon fab fa-instagram-square"></i>
                    <i className=" sidebarIcon fab fa-pinterest-square"></i>
                </div>
            </div>

        </div>
    )
}
