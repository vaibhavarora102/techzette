import "./post.css"
import blogimg1 from "../../assets/blogimg1.jpg"
export default function Post() {
    return (
        <div className="post">
            <img src={blogimg1} alt="loading" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">AI</span>
                    <span className="postCat">Tech</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum consequatur corporis expedita accusamus, ex quia consectetur atque voluptatum nulla suscipit iste officiis inventore illum ratione quam amet dolor distinctio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dicta rem officia dolore beatae numquam minima, ducimus laudantium deserunt voluptatum libero molestias iure incidunt eius ab velit, officiis corporis doloremque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ad illo totam expedita voluptatum obcaecati dolorem tempore saepe, provident nesciunt similique quidem minus. Neque error alias, temporibus facere nesciunt adipisci!
            </p>
        </div>
    )
}
