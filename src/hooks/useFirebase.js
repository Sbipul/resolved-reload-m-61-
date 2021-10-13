import { useEffect, useState } from "react";
import { GoogleAuthProvider,getAuth, signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import initAuth from '../Pages/Login/Firebase/init'
initAuth()

const useFirebase = () => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)


    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(res => {
            setUser(res.user)
        })
        .finally(()=>{
            setLoading(false)
        })
    }
    useEffect(()=>{
    const unSubscribed = onAuthStateChanged(auth,(user)=>{
            if (user) {
                setUser(user)
            }else{
                setUser({})
            }
            setLoading(false)
        })
        return () => unSubscribed;
    },[auth])


    const logOut = () => {
        setLoading(true)
        signOut(auth)
        .then(()=>{})
        .finally(()=>{
            setLoading(false)
        })
    }


    return {
        user,
        googleSignIn,
        logOut,
        loading
    }
};

export default useFirebase;