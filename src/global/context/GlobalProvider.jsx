import React, { useState } from 'react'
import { GlobalContext } from './global';

function GlobalProvider({children}) {
    const [modalActive , setModalActive] = useState(false);

  return (
    <GlobalContext.Provider value={{modalActive,setModalActive}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider





