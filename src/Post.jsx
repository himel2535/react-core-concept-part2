export default function Post({post}){

    const cardStyle = {
    border: "2px solid gold",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  };

    const {title,body}=post;
    return(
        <div style={cardStyle}>
            <h5>Title:{title}</h5>
            <p>Body: {body}</p>
        </div>
    )
}