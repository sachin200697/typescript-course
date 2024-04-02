import React from 'react';

interface ChildProps {
    color: string;
    children?: React.ReactNode  // ? is to make it optional
}

//There are three ways to create a functional component
// 1. it does not have any additional property like contextType, displayName etc as typescript
//    does not know if it is a react component of not
//    To receive the children props, nedd to mention it inside interface
export function Child({color}: ChildProps) {
  return (
    <div>
      {color}
    </div>
  );
}
// Child.contextType will give error
// we also can not use Clil

// 2. function as React.FC (we can also use React.FunctionalComponent as FC is short form)
//    now we can use ChildAsFunctionalComponent.contextType property
//    To receive the children props, nedd to mention it inside interface
export const ChildAsFunctionalComponent: React.FC<ChildProps> = ({color}) => {
  return (
  <div>
    {color}
  </div>
  );
}

// const name = ChildAsFunctionalComponent.displayName;   //we can use these properties now
