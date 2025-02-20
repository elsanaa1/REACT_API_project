import React from 'react'

export default function UserList ({listOfUSer}) {
  return (
    <div>
        {/* {   map list of listOfUSer to display every item inside a div element */
            listOfUSer.map((e)=>(
                <div style={{ margin:'12px auto', backgroundColor:'#2C3930',color:'white', width:'40%'}} key={e.id}>
                    <h3>{e.title}</h3>
                    <p><span>Id: </span>{e.id}</p>
                    <p> <span>userId: </span>{e.userId}</p>
                    <p><span>Completed: </span>{e.completed? 'true':'false'}</p>
                </div>
            ))
        }
    </div>
  )
}
