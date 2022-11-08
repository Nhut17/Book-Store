import React from 'react'
import { ClipLoader } from 'react-spinners'

export const Loading = (component) => {
    const newComponent = ({...props}) => {
        return (
            <>
                <ClipLoader
                    color='' />

            </>
        )
    }
    return newComponent
}

