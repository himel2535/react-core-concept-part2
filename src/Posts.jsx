import { use } from "react";
import Post from "./Post"

export default function Posts({fetchPosts}){

    const posts=use(fetchPosts)

    const cardStyle = {
    border: "2px solid gold",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  };
    return (
        <div style={cardStyle}>
            <h3>Posts Are Here</h3>
            <p>Posts-length: {posts.length}</p>
            {
                posts.map(post=> <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}