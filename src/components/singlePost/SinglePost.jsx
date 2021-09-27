import "./singlePost.css"
import singleimg1 from "../../assets/single1.png"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={singleimg1} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                    <i className= "singlePostIcon far fa-edit"></i>
                    <i className= "singlePostIcon fas fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Vaibhav Arora</b>
                    </span>
                    <span className="singlePostDate">1 Hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae alias blanditiis eius eum eos porro similique sed maxime quam, provident, ipsa ut optio explicabo facere quidem minima assumenda placeat atque inventore quia. Consequatur est tenetur corporis, debitis veritatis cumque voluptas eligendi inventore dicta facere necessitatibus sequi nobis cum nemo deleniti eos. Ullam exercitationem labore dolorum eius laboriosam, repellat corrupti dolore quasi cum officiis id perferendis rem consequatur temporibus asperiores explicabo ipsa vel nihil in? Atque voluptatum quisquam ex aperiam maxime voluptates fuga necessitatibus ab voluptate consequatur amet, facilis sequi pariatur? Suscipit at iure, laborum dolor aspernatur corrupti saepe sit alias, facilis sunt corporis voluptate mollitia itaque pariatur repellat error expedita accusantium necessitatibus distinctio, numquam temporibus animi officia rerum! Perspiciatis, soluta assumenda nihil at eius eligendi ipsa voluptatum deleniti magnam quam delectus autem, sed ad obcaecati aliquid maiores aperiam ratione quidem cum tempora corrupti? Laudantium fugiat consectetur dolorum tempora praesentium ipsam autem, nesciunt nihil odio cum inventore soluta, explicabo eligendi totam vel dolore adipisci saepe dignissimos voluptates eos nisi aut molestiae. Molestiae impedit, architecto sunt, ab quasi quo, minus aliquam eaque ducimus aspernatur ipsum nisi. Ipsa, rerum fugit quisquam dolores debitis culpa, placeat totam perferendis nemo similique enim cum omnis porro atque corporis? Libero ratione illo nostrum obcaecati error dicta rerum eveniet quidem totam pariatur officiis corporis similique quaerat laudantium maxime, sit consectetur harum reprehenderit sed asperiores debitis, vero cumque est? Nemo quibusdam ducimus quas minima odio molestiae modi, animi harum sed natus, dicta architecto. Enim dolorem, labore nihil ipsum incidunt unde, eligendi maxime ab earum alias soluta? Debitis obcaecati iure aspernatur ab, omnis quis non fuga odit quidem nostrum deserunt vel in reiciendis, ipsum labore modi rem neque quas? Aut similique ullam aspernatur accusamus nam quae ut repellat reiciendis excepturi. Harum similique maiores nulla architecto in, nostrum amet cum placeat.
                </p>


            </div>
        </div>
    )
}
