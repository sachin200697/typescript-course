import React from 'react';
import {Child, ChildAsFunctionalComponent} from './Child';
import { GuestList } from '../state/GuestList';


export default function Parent() {
  return (
    <div>
      {/* <Child /> */}      
      {/* <Child color='Green'> </Child> */}
      <Child color='Green' />
      <br></br>
      <ChildAsFunctionalComponent color='Black'>ABCD</ChildAsFunctionalComponent>
      <GuestList />
    </div>
  );
}
