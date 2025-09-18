import { use } from "react"

export default function Boys({boysPromise}){

    const boys=use(boysPromise)

    return(
        <div>
            <h3>Boys:{boys.length}</h3>
        </div>
    )
}