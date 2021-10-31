import React, { ReactNode, useState } from 'react';

interface ContextProps { children: ReactNode }

const UserContext = React.createContext({})

const UserProvider = ({children}: ContextProps) => {
  const [ showWarning, setWarning] = useState(true)
  const toggleWarning = () => { setWarning(v => !v) }

  return (
    <UserContext.Provider value={{showWarning, toggleWarning}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;
