import React, { useEffect } from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
import '../sass/modal.scss'

export const Loading = (Component) => {
    const NewComponent = ({...props}) => {

        
       
        return (
            <>
                 <Component {...props} />
                 {
                    true && (
                        <div className='modal-loading'>
                            <ClipLoader 
                                color={'black'}
                                loading={state}
                                size={30}   />
                        </div>
                    )
                 }
 
            </>
     )
}
return NewComponent
}


