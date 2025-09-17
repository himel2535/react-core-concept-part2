import { useState } from "react"

export default function Batsman(){  

    const [runs,setRuns]= useState(0)

    const [sixes,setSixes]= useState(0)

    const [fours,setFours]=useState(0)

    const handleSingle=()=>{
        const updatedRuns=runs+1;
        setRuns(updatedRuns)
    }

    const handleFour=()=>{
        const updatedRuns=runs+4;
        setRuns(updatedRuns);
        const updatedFours=fours+1;
        setFours(updatedFours)
    }

    const handleSix=()=>{
        const updatedRuns=runs+6;
        const updatedSixes=sixes+1
        setRuns(updatedRuns);
        setSixes(updatedSixes)
    }

    const batsmanStyle={
        border:'2px solid green',
        borderRadius:'10px'
    }

    return (
        <div style={batsmanStyle}>
            {
                runs >50 && <p>Congratulations for half century</p>
            }
            <h2>score:{runs}</h2>
            <h4>Sixes:{sixes}</h4>
            <h4>Fours:{fours}</h4>
            <button onClick={handleSingle}>single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}