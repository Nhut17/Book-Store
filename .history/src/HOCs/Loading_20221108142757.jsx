import React from 'react'
import { ClipLoader } from 'react-spinners'
import '../sass/ModalLoading/modal.scss'

export const Loading = (component) => {
    const newComponent = ({...props}) => {

        const state = useSelec

        return (
            <>
            <div className="modal-loading">
                <ClipLoader
                    color='#0a6f3c'
                    loading={true}
                    size={30} />
            </div>
            </>
        )
    }
    return newComponent
}

