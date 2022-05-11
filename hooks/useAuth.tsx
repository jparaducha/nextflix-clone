import { setUserId } from '@firebase/analytics';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
  } from 'firebase/auth'
  
  import { useRouter } from 'next/router'
  import  React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
  import { auth } from '../firebase'

  interface IAuth {
    user: User | null
    signUp: (email: string, password: string) => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    error: string | null
    loading: boolean
  }

  interface AuthProviderProps {
      children : React.ReactNode // el tipo de las props es un ReactNode que es un ReactChild ??? porque toma el contexto global desde _app.tsx ??? 
  }


  const AuthContext = createContext<IAuth>({  // ???????????????? //
      user: null,
      signUp: async () => {},
      signIn: async () => {},
      logout: async () => {},
      error: null,
      loading: false

  })

export const AuthProvider = ({children} : AuthProviderProps) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const [error, setError] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);

    useEffect(
        ()=>{
            onAuthStateChanged(auth, (user)=>{
                if(user){
                    // usuario logueado;
                    setUser(user);
                    setLoading(false);
                }else{
                    // usuario no logueado;
                    setUser(null);
                    setLoading(true);
                    router.push("/login");
                }

                setInitialLoading(false);
            })
    }, [auth])



    const signUp = async (email: string,password: string) => {
        setLoading(true);

        await createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
            setUser(userCredential.user)
            router.push("/");
            setLoading(false);
        }).catch((error)=> alert(error.message)).finally(()=> setLoading(false))

    }

    const signIn = async (email: string,password: string) => {
        setLoading(true);

        await signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
            setUser(userCredential.user)
            router.push("/");
            setLoading(false);
        }).catch((error)=> alert(error.message)).finally(()=> setLoading(false))

    }

    const logout = async () => {
        setLoading(true);

        signOut(auth).then(()=>{
            setUser(null);
        }).catch((error) => alert(error.message))
        .finally(()=> setLoading(false));
    }

    const memoedValue = useMemo(()=> {  // ???????????????????? //

       return { user, signUp, signIn, loading,error, logout}

    }, [user,loading, error])

    return <AuthContext.Provider value={memoedValue}>
        {!initialLoading && children}
    </AuthContext.Provider>
}

export default function useAuth(){
    return useContext(AuthContext);
}