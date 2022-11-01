import React from 'react'
import { Breadcrumb } from 'antd';


const Breadcrumbs = ({breadcrumbs}) => {
  return (
    <>
        <Breadcrumb separator=">">
            {
                breadcrumbs.map(val => (
                    <Breadcrumb.Item href={val.path}>{val.direct}</Breadcrumb.Item>
                ))
            }
        </Breadcrumb>
    </>
  )
}

export default Breadcrumbs