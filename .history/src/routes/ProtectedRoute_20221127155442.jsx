import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({isAllowed,redirectPath='/',children}) => {

    if(!isAllowed)
    {
        return   <Navigate to={redirectPath} replace />
    }

  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoute
