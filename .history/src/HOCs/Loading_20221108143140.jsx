import React, { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
import '../sass/modal.scss'

export const Loading = (Component) => {
    const NewComponent = ({...props}) => {

        const [isLoading,setIsLoading] = useState(false)
        useEffect(() => {
           const loading = setTimeout(() => {
                set
            })
        },[])
       
        return (
            <>
                 <Component {...props} />
                 {
                    true && (
                        <div className='modal-loading'>
                            <ClipLoader 
                                color={'black'}
                                loading={isLoading}
                                size={30}   />
                        </div>
                    )
                 }
 
            </>
     )
}
return NewComponent
}


