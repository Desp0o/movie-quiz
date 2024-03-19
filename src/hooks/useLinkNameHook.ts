import React from 'react'
import { useDispatch } from 'react-redux'
import { setLinkName } from '../redux/LinkSlicer'

export const useLinkNameHook = () => {
    
    const dispatch = useDispatch()
    
    const setLinkDispatch = (linkName: string) => {
        dispatch(setLinkName(linkName))
    }

    return setLinkDispatch
}
