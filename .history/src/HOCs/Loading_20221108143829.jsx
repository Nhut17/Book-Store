import React, { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
import '.''

export const Loading = (Component) => {
    const NewComponent = ({...props}) => {

        const [isLoading,setIsLoading] = useState(true)
        useEffect(() => {
           let loading = setTimeout(() => {
                setIsLoading(false)
            },2000)

            return () => {
                clearTimeout(loading)
            }
        },[])
       
        return (
            <>
                 <Component {...props} />
                 {
                    isLoading && (
                        <div className='modal-loading'>
                            <ClipLoader 
                                color={'#0a6f3c'}
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


