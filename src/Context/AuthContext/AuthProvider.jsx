
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { } from 'react-router';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Component/FireBase/Firebase.init';

const AuthProvider = ({children}) => {

    const [book , Setbook]=useState([])
    const [user , Setuser] = useState(null)

    const CreateUser=(email , password)=>{
       return createUserWithEmailAndPassword(auth ,email ,password )
    }

    const signInUser =(email ,password)=>{
       return signInWithEmailAndPassword(auth ,email , password)
    }

    useEffect(()=>{
        fetch('http://localhost:3000/all-books')
        .then(res=>res.json())
        .then(data=>Setbook(data))

    },[])

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentuser)=>{
            Setuser(currentuser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])


    



    const authInfo={
        book,
        CreateUser,
        signInUser,
        user
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;