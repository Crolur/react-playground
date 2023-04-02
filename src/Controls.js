import { useState } from "react"
import './Controls.css'

const Controls = ({onControlsChange}) => {
    const [size, setSize] = useState(1)

    const changeSize = (e) =>{
        setSize(e.target.value)
        onControlsChange(e.target.value)
    }

    return(
        <div className="controls">
            <p>Box size:</p>
            <input autoComplete="off" onChange={changeSize} type="range" min={0} max={3} step={1} defaultValue={0} list="markers"></input>
            <datalist id="markers">
                <option value={1} label="1"></option>
                <option value={2} label="2"></option>
                <option value={3} label="4"></option>
                <option value={4} label="8"></option>
            </datalist>
        </div>
    )
}

export default Controls