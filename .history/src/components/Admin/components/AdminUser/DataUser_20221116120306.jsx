import React from 'react'

const DataUser = ({data,stt}) => {
  return (
    <tr>
    <td>{stt}</td>
    <td>{data.name}</td>
    <td>{'user.email'}</td>
    <td>{'user.address'}</td>
    <td>{'user.phone'}</td>
    <td className="delete-user"><DeleteOutlined /></td>
</tr>
  )
}

export default DataUser
