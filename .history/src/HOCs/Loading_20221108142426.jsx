import React from 'react'
import { ClipLoader } from 'react-spinners'

export const Loading = (component) => {
    const newComponent = ({...props}) => {
        return (
            <>
                <ClipLoader
                    color='#0a6f3c'
                    loading={true}
                     />

            </>
        )
    }
    return newComponent
}

