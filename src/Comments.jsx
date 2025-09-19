import { use } from "react"
import Comment from "./comment"

export default function Comments({fetchComments}){

    const comments=use(fetchComments)

    const cardStyle = {
    border: "2px solid gold",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  };
    return(
        <div style={cardStyle}>
            <h3>All comments are here</h3>
            <p>Comments:{comments.length}</p>
            {
                comments.map(comment=>  <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
        
    )
}