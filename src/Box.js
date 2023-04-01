import { useState } from 'react'
import './Box.css'

const Box = () => {
    const [light, setClasses] = useState('')

    const mouseOverHandler = () => {
        setClasses('light')
        setTimeout(() => {
            setClasses('')
        }, 300);
    }

    return (
        <div onMouseOver={mouseOverHandler} className={`box ${light}`}>

        </div>
    )
}

export default Box