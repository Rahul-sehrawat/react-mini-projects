import { useEffect, useState } from "react"

const ProgressBar = ({value = 0, onComplete = ()=>{}})=>{
    const [percent, setPercent] = useState(value)

    useEffect(()=>{
        // max is used for -ve values
        setPercent(Math.min(100,Math.max(value,0)))

        if(value>= 100){
            onComplete();
        }

    },[value])

    return(
        <div className="progress">
            <span
                style={{color: percent>49 ?'white':'black'}}
            >{percent.toFixed()}%</span>
            <div
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent.toFixed()}
                // style={{width:`${percent}%`}}
                style={{transform: `scaleX(${percent/100}`,
                        transformOrigin:"left"}}  //for better performance
                ></div>
        </div>
    )
}


export default ProgressBar