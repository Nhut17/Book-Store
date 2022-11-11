import React, { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
import '../sass/ModalLoading/modal.scss';

export const Loading = (Component) => {
    const NewComponent = ({...props}) => {

       
       
        return (
            <>
                 <Component {...props} />
                 {
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
return NewComponent
}


