import React, { useEffect } from 'react'
import { useLinkNameHook } from '../hooks/useLinkNameHook'

const AllQuiz = () => {

const setLinkDispatch = useLinkNameHook()
 
useEffect(()=>{
    setLinkDispatch('Quiz')
},[])

  return (
    <div>AllQuiz</div>
  )
}

export default AllQuiz