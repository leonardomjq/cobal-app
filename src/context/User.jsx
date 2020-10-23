import React, { createContext, useState, useContext } from 'react'

export const UserContext = createContext()

export default function UserProvider({ children }) {
  const [userCard, setUserCard] = useState([])

  return (
    <UserContext.Provider
      value={{
        userCard,
        setUserCard,
      }}>
      {children}
    </UserContext.Provider>
  )
}

// creating custom hook
export function useUserCard() {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUserCard must be used within a UserProvider')
  const { userCard, setUserCard } = context
  return { userCard, setUserCard }
}

