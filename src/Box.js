import { useState } from 'react'
import './Box.css'

const Box = (props) => {
    const [light, setClasses] = useState('')

    const mouseOverHandler = () => {
        setClasses('light')
        setTimeout(() => {
            setClasses('')
        }, 300);
    }

    return (
        <div onMouseOver={mouseOverHandler} className={`box ${light}`} style={{height: props.size+'rem', width: props.size + 'rem'}}>

        </div>
    )
}

export default Box