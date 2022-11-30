import React from 'react'
import ListBookRight from './ListBookRight'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MainRight = ({list_product}) => {

  const { listCate } = useSelector(state => state.category)

  return (
    <div className='main-right'>
     

      {
        listCate.map((val,index) => (
          <ListBookRight  title={val.catName} />

        ))
      }

    


      <div className="pay-QR">

        <Link><img src="https://www.vinabook.com/images/App-VNB_opt4.png" alt="" /></Link>
        <Link><img src="https://www.vinabook.com/images/App-VNBR.png" alt="" /></Link>
      
      </div>

    </div>
  )
}

export default MainRight