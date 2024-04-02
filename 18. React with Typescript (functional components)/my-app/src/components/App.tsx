import React from 'react';
import Parent from './props/Parent';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';
import UserSearchWithRef from './refs/UserSearch';

export default function App() {
  return (
    <div>
      <Parent />
      <UserSearch />
      <EventComponent />
      <UserSearchWithRef />
    </div>
  );
}
