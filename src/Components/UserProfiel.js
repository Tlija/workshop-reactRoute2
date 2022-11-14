import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfiel({users}) {
  const {iduser}=useParams()
  const user= users.find(el=>el.id== iduser)
  
  
  return (
    <div>
     <h1>{user.name}</h1>
     <h2>{user.email}</h2>
     
    </div>
  )
}
