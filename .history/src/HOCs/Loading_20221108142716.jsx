import React from 'react'
import { ClipLoader } from 'react-spinners'
import '../sass/ModalLoading/modal.scss'

export const Loading = (component) => {
    const newComponent = ({...props}) => {
        return (
            <>
            <div className="modal-loadng"></div>
                <ClipLoader
                    color='#0a6f3c'
                    loading={true}
                    size={30} />

            </>
        )
    }
    return newComponent
}

