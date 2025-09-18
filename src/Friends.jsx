import { use } from "react"

export default function Friends({fetchFriends}){

    const friends =use(fetchFriends)
    return(
        <div>
            <h3>Friends:{friends.length}</h3>
        </div>
    )
}