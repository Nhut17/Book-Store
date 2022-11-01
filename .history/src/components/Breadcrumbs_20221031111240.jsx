import React from 'react'
import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css'; 


const Breadcrumbs = ({}) => {
  return (
    <>
        <Breadcrumb separator=">">
            <Breadcrumb.Item href=''></Breadcrumb.Item>
        </Breadcrumb>
    </>
  )
}

export default Breadcrumbs