
export default function Comment({comment}){

    const {name,email,body}=comment;

    const cardStyle = {
    border: "2px solid gold",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  };
    return(
        <div style={cardStyle}>
            <h4>comment email :{email} </h4>
            <p>name: {name}</p>
            <p>Body : {body}</p>
        </div>
    )
}