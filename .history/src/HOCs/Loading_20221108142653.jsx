import React from 'react'
import { ClipLoader } from 'react-spinners'
import '../sass/'

export const Loading = (component) => {
    const newComponent = ({...props}) => {
        return (
            <>
                <ClipLoader
                    color='#0a6f3c'
                    loading={true}
                    size={30} />

            </>
        )
    }
    return newComponent
}

