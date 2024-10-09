import React from 'react'
import Sidebar from '../../Components/Sidebar'
function Listing() {
  return (
    <section className="productListingPage">
      <div className="container">
        <div className="productListing d-flex">
          <Sidebar></Sidebar>
          <div className="contentRight">content right</div>
        </div>
      </div>
    </section>
  )
}

export default Listing