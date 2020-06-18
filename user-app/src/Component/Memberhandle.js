import React from 'react';
import Container from './Member'

function MemberHolder  ({info}){

    if(!info){
        return <h5>Loading user info</h5>
    }
    return (
        <Container>
            <div className="user-name">
               <h3> Name: {info.flname} </h3> 
            </div>
            <div className="user-details">
                <p> Username: {info.username} </p>
                <p> Email Address: {info.email} </p>
                <p> Gender: {info.gender} </p>
                <p>ROLE: {info.role} </p>
            </div>   
                
            {
               !!info.interested && !!info.interested.length &&
               <div>
                 Interested:
                 <ul>
                   {info.interested.map((like, idx) => <li key={idx}>{like}</li>)}
                 </ul>
               
                </div>  
            }
        
        </Container>
    )
}
export default MemberHolder;

