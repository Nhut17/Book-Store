import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({isAllowed,children}) => {

    if(!user)
    {
        return   <Navigate to='/' replace />
    }

  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoute
