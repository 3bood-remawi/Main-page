import {  collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './Firebase';


export const useFireBase=(dataCollection)=>{
    const [items,setItems ] = useState([])
    
    useEffect (()=>{
        const unSubscribe=onSnapshot(collection(db,dataCollection),(querySnapShot)=>{
            const data=querySnapShot.docs.map((doc)=>({...doc.data(),id:doc.id}))
            setItems(data)
        })
            return ()=>unSubscribe()
    },[])

    
return {items}

}