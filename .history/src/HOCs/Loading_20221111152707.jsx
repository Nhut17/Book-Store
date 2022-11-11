import React, { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
import '../sass/ModalLoading/modal.scss';

export const Loading = ({loading}) => {
    

        return (
            <>
                    props.loading && (
                        <div className='modal-loading'>
                            <ClipLoader 
                                color={'#0a6f3c'}
                                loading={props.loading}
                                size={30}   />
                        </div>
                    )
                 }
 
            </>
     )

}


