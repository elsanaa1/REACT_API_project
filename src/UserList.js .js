import React from 'react'

export default function UserList ({listOfUSer}) {
    const divStyle={ margin:'12px auto', backgroundColor:'#2C3930',color:'white', width:'40%',padding:6}
  return (
    <div>
        {
        /* {   map list of listOfUSer to display every item inside a div element */
            listOfUSer.map((e)=>(
                <div style={divStyle} key={e.id}>
                    <h3>Title: {e.title}</h3>
                    <p>Id: {e.id}</p>
                    <p> UserId: {e.userId}</p>
                    <p>Completed: {e.completed? 'true':'false'}</p>
                </div>
            ))

        }
    </div>
  )
}
