import React, { useState } from "react"
export const GuestList: React.FC = ()=>{
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);
    const handleClick = ()=>{
        setGuests([...guests, name]);
        setName('');
    }
    return <div>
        <h2>Guest List</h2>
        <input type="text" onChange={e=>setName(e.target.value)} value={name}/>
        <button onClick={handleClick}>Add Guest</button>
        <ul>
            {guests.map((guest, index)=><li key={index}>{guest}</li>)}
        </ul>
    </div>
}