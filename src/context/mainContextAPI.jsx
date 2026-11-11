import React, { createContext } from 'react'
import {useState} from 'react'


export const mainContext = createContext()

export const MainContextAPI = ({children}) => {

    const [allExpence, setAllExpence] = useState(JSON.parse(localStorage.getItem("expence") || '[]'))


  return (
    <mainContext.Provider value={{allExpence, setAllExpence}}>{children}</mainContext.Provider>
  )
}
