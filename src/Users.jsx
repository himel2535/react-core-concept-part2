import { use } from "react"

export default function Users({fetchUsers}){

    const users=use(fetchUsers)

    console.log(users)

    const usersStyle={
        border:"2px solid gold",
        borderRadius:"10px"
    }

    return(
        <div style={usersStyle}>
            <h3>Users:{users.length}</h3>
        </div>
    )
}