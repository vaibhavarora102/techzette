import "./topbar.css"
import wwc from "../../src/assets/wwc.png"

export default function TopBar() {
    return (
        <div className ="top">
            <>
                <div className="topleft">
                <i className=" topIcon fab fa-facebook-square"></i>
                <i className=" topIcon fab fa-twitter-square"></i>
                <i className=" topIcon fab fa-instagram-square"></i>
                <i className=" topIcon fab fa-pinterest-square"></i>
                </div>
                <div className="topcenter">
                    <ul className="topList">
                        <li className="topListItems">HOME</li>
                        <li className="topListItems">ABOUT</li>
                        <li className="topListItems">CONTACT</li>
                        <li className="topListItems">WRITE</li>
                        <li className="topListItems">LOG OUT</li>
                    </ul>
                </div>
                <div className="topright">
                    <img className="topImage" src={wwc} alt="there is pic" />
                    <i className=" topSearchIcon fas fa-search"></i>
                </div>
            </>
        </div>
    )
}
