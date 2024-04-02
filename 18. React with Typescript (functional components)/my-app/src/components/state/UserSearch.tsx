import React, { useState } from 'react';

const userList = [
    {name: 'sachin', age:25},
    {name: 'Naman', age:19},
    {name: 'Pradeep', age:24}
]
const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number}|undefined>(undefined);

    const onClick = ()=>{
        const user = userList.find(user=>user.name===name);
        setUser(user);
        setName('');
    }
  return (
    <div>
      <input type='text' value={name} onChange={e=>setName(e.target.value)} />
      <button onClick={onClick}>Search User</button>
      {user? <div><p>{user.name}</p><p>{user.age}</p></div>: 'User is not present'}
    </div>
  );
}

export default UserSearch;