import React from 'react'
import Sidebar from '../../Components/Sidebar'
import banner from '../../assets/slideBanner1.jpg'
import { FaGripHorizontal } from "react-icons/fa";
import { FaGripVertical } from "react-icons/fa";
import { useState } from 'react';
import Button from "@mui/material/Button";
import ProductItem from '../../Components/ProductItem';
import Pagination from '@mui/material/Pagination';
function Listing() {
  const [classArg, setClassArg] = useState('');
  return (
    <section className="productListingPage">
      <div className="container">
        <div className="productListing d-flex">
          <Sidebar></Sidebar>
          <div className="contentRight">
            <div className="container">
                <img className='w-100' src={banner} alt="" />
                <div className="viewControls mt-3">
                  <div className="icons ">
                  <FaGripVertical onClick={()=>setClassArg('width50')}/>
                  <FaGripHorizontal onClick={()=>setClassArg('width33')}/>
                  
                  </div>
                  <div className="btn">
                    <Button>View All</Button>
                  </div>
                  
                </div>
                <div className="products d-flex mt-3">
                  <ProductItem classArg={classArg}></ProductItem>
                  <ProductItem classArg={classArg}></ProductItem>
                  <ProductItem classArg={classArg}></ProductItem>
                  <ProductItem classArg={classArg}></ProductItem>
                  <ProductItem classArg={classArg}></ProductItem>

                </div>
                <div className="pagination m-5 justify-content-center">
      <Pagination count={10} color="secondary" />
      </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Listing