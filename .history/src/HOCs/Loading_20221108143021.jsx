import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import '../sass/modal.scss'

export const Loading = (Component) => {
    const NewComponent = ({...props}) => {

       const state = useSelector(state => state.dog.loading)
        
       
       console.log('loading')
        return (
            <>
                 <Component {...props} />
                 {
                    state && (
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


