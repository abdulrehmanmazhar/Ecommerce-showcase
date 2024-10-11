import React, { useState } from 'react'
import UserContext from './UserContext'
function UserContextProvider({children}) {
    const [login, setLogin] = useState(false);
    const [userModal, setUserModal] = useState(false);
  return (
    <UserContext.Provider value={{userModal, setUserModal, login}}>{children}</UserContext.Provider>
  )
}

export default UserContextProvider