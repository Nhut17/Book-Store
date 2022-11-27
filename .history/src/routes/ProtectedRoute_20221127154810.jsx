import React from 'react'

const ProtectedRoute = ({user,children}) => {

    if(!user)
    {
        return (
            
        )
    }

  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoute
