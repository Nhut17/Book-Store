import React from 'react'
import { Breadcrumb } from 'antd';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css'


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