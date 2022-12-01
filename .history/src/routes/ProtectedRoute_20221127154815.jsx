import React from 'react'

const ProtectedRoute = ({user,children}) => {

    if(!user)
    {
        return (
            <Navi
        )
    }

  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoute
