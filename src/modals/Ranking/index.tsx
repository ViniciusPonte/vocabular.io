import { useEffect, useState } from "react";
import firebase from 'firebase';

export function Ranking(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers([]);

        firebase.firestore().collection('points').orderBy('points',  'desc').get()
        .then(response => {
            response.docs.map(doc => {
                const data = doc.data();
                setUsers(old => [...old, data])
            })
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <>
        <h1>Ranking</h1>
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'start'}}>
            {users.map(user => <span key={user.name}>{user.points} - {user.name} </span>)}
        </div>
        </>
        
    )
}