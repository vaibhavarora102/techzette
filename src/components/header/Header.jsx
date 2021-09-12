import "./header.css"
import img1 from "../../assets/walimg.png"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Work with Craze</span>
                <span className="headerTitlelg">Blog</span>
            </div>
            <img className="headerImg" src={img1} alt="loading" />

        </div>
    )
}
