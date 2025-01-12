import React, { useState } from 'react'

export const UserDataContext = createContext()

function UserContext({ children }) {


    const[user, setUser] = useState({
        email:'',
        fulllName:{
            firstName:'',
            lastName:''
        }
    })
    return (
        <div>
            <UserDataContext.Provider value={user}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}
export default UserContext