import React from 'react'

const ProtectedRoute = ({user,children}) => {

    if(!user)
    {
        return (
            <Navigate />
        )
    }

  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoute
