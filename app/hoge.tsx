"user clinet";

import { useState } from "react";

export default function Hoge(props: {
    onClick: (hoge: { text: string}) => void
}) {
    const [value, updateValue] = useState("")
    return (
        <div>
            <input type="text" name="hogeInput" value={value} onChange={(e) => updateValue(e.target.value)}></input>
            <button type="button" onClick={() => props.onClick({ text: value })}>Click</button>
        </div>
    )
}
