import { createContext, useContext } from "react";
import { useAppwrite } from "./useAppwrite";
import { getCurrentUser } from "./appwrite";

interface User{
    $id: string;
    name: string;
    email: string;
    avatar: string;
}

interface GlobalContextType{
    isLoggedIn: boolean;
    user: User | null;
    loading: boolean;
    refetch: (newParams?: Record <string, string | number>) => Promise<void>
}

//create the global context
const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

//create the global provider
const GlobalProvider = ({children}: {children: React.ReactNode}) => {
    const {data: user, loading, error, refetch} = useAppwrite({
        fn: getCurrentUser
    })
//check if the user is logged in
    const isLoggedIn = !!user 
//log the user
    console.log(JSON.stringify(user, null, 2))
    return(
        //provide the global context
        <GlobalContext.Provider value={{ 
            isLoggedIn,
            user,
            loading,
            refetch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
//custom hook to use the global context
export const useGlobalContext = () => {
    const context = useContext(GlobalContext)
    if(!context) throw new Error('useGlobalContext must be used within a GlobalProvider')
    return context
}

export default GlobalProvider
