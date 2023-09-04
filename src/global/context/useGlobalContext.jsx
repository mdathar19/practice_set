import React, { useContext } from 'react'
import { GlobalContext } from './global'

function useGlobalContext() {

  return useContext(GlobalContext)
}

export default useGlobalContext
