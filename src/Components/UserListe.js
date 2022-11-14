import React from 'react';
import User from './User';

export default function UserListe({users}) {
  return (
    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
    {
        users.map(
            (user)=><User user={user} key={user.id}/>
        )
    }
    </div>
  )
}
