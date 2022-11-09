import React from 'react'
import { ClipLoader } from 'react-spinners'

export const Loading = (component) => {
    const newComponent = ({...props}) => {
        return (
            <>
                <ClipLoader>
                    
                </ClipLoader>
            </>
        )
    }
    return newComponent
}

