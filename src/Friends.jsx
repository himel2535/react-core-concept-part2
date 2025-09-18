import { use } from "react"
import Friend from "./Friend";
export default function Friends({fetchFriends}){

    const friends =use(fetchFriends)


    const cardStyle = {
    border: "2px solid gold",
    borderRadius: "10px",
    margin:"10px",
    padding:"10px"
  };
    return(
        <div style={cardStyle}>
            <h3>Friends:{friends.length}</h3>
            {
                friends.map(friend=> <Friend key={friend.id}  friend={friend}></Friend>)
            }
        </div>
    )
}