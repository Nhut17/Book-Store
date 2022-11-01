import React from 'react'
import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css'; 


const Breadcrumbs = ({breadcrumbs}) => {
  return (
    <>
        <Breadcrumb separator=">">
            {
                breadcrumbs.map(val => (
                    <Breadcrumb.Item href={val.path}>{]</Breadcrumb.Item>
                ))
            }
        </Breadcrumb>
    </>
  )
}

export default Breadcrumbs