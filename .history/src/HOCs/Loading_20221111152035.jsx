import React, { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
import '../sass/ModalLoading/modal.scss';

export const Loading = (Component) => {
    const NewComponent = ({...props}) => {

        const [isLoading,setIsLoading] = useState(false)
       
       
        return (
            <>
                 <Component {...props} />
                 {
                    isLoading ? (
                        <div className='modal-loading'>
                            <ClipLoader 
                                color={'#0a6f3c'}
                                loading={isLoading}
                                size={30}   />
                        </div>
                    ): (
                        <Component {...props} />
                    )
                 }
 
            </>
     )
}
return NewComponent
}


