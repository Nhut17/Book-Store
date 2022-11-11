import React, { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
import '../sass/ModalLoading/modal.scss';

export const Loading = ({loading}) => {
    
        return (
            <>
                    loading && (
                        <div className='modal-loading'>
                            <ClipLoader 
                                color={'#0a6f3c'}
                                loading={loading}
                                size={30}   />
                        </div>
                    )
            </>
     )

}


