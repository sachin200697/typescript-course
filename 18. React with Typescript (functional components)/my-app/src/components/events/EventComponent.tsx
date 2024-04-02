import React from "react";
const EventComponent: React.FC = ()=>{
    const onChange = (event: React.ChangeEvent<HTMLInputElement>):void=>{
        console.log(event);
        
    }
    const onDrag = (event: React.DragEvent<HTMLDivElement>)=>{
        console.log(event);
        
        console.log('Div is dragged');
        
    }
    return <div>
        <h2>Events</h2>
        <input onChange={onChange} />  

        <div draggable onDrag={onDrag}>Drag this div</div>      
    </div>
}

export default EventComponent;