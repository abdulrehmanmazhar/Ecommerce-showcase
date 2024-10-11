import React from 'react'
import { Link } from 'react-router-dom'
import Rating from "@mui/material/Rating";
import QuantityBox from '../../Components/QuantityBox';
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";

function Cart() {
  return (
    <section className='section cart mt-4 pt-0'>
      <div className="container">
      <h2 className='hd'>YOUR CART</h2>
      <p>There are <b>3</b> products in your cart</p>
        <div className="row">
          
          <div className="col-md-8">

        <div className="table-responsive">
          <table className='table'>
            <thead>
            <tr>
              <th width="45%">Product</th>
              <th width="15%">Unit Price</th>
              <th width="10%">Quantity</th>
              <th width="15%">Subtotal</th>
              <th width="15%">Remove</th>
            </tr>
            </thead>
          </table>
          <tbody>
            <tr>
              <td width={'45%'}>
                <Link to={'/product/1'}>
                <div className="d-flex align-items-center cartItemimgWrapper">
                  <div className="imgWrapper">
                    <img className='w-100' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" alt="" />
                  </div>
                  <div className="info px-3">
                    <h6>Best ever ginger cookies</h6>
                    <Rating
          className="mt-2 mb-2"
          name="read-only"
          value={4.5}
          readOnly
          size="small"
          precision={0.5}
        />
                  </div>
                </div>
                </Link>
              </td >
              <td width={'15%'}>$5.25</td>
              <td width={'10%'} className='quantityBox'>
                <input type="number" name="" id="" value={1} />
              </td>
              <td width={"15%"}>
                $5.25
              </td>
              <td width={"15%"}>
              <MdDelete className='ml-3' />

              </td>

            </tr>
            <tr>
              <td width={'45%'}>
                <Link to={'/product/1'}>
                <div className="d-flex align-items-center cartItemimgWrapper">
                  <div className="imgWrapper">
                    <img className='w-100' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" alt="" />
                  </div>
                  <div className="info px-3">
                    <h6>Best ever ginger cookies</h6>
                    <Rating
          className="mt-2 mb-2"
          name="read-only"
          value={4.5}
          readOnly
          size="small"
          precision={0.5}
        />
                  </div>
                </div>
                </Link>
              </td >
              <td width={'15%'}>$5.25</td>
              <td width={'10%'} className='quantityBox'>
                <input type="number" name="" id="" value={1} />
              </td>
              <td width={"15%"}>
                $5.25
              </td>
              <td width={"15%"}>
              <MdDelete className='ml-3' />

              </td>

            </tr>
            <tr>
              <td width={'45%'}>
                <Link to={'/product/1'}>
                <div className="d-flex align-items-center cartItemimgWrapper">
                  <div className="imgWrapper">
                    <img className='w-100' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" alt="" />
                  </div>
                  <div className="info px-3">
                    <h6>Best ever ginger cookies</h6>
                    <Rating
          className="mt-2 mb-2"
          name="read-only"
          value={4.5}
          readOnly
          size="small"
          precision={0.5}
        />
                  </div>
                </div>
                </Link>
              </td >
              <td width={'15%'}>$5.25</td>
              <td width={'10%'} className='quantityBox'>
                <input type="number" name="" id="" value={1} />
              </td>
              <td width={"15%"}>
                $5.25
              </td>
              <td width={"15%"}>
              <MdDelete className='ml-3' />

              </td>

            </tr>
            <tr>
              <td width={'45%'}>
                <Link to={'/product/1'}>
                <div className="d-flex align-items-center cartItemimgWrapper">
                  <div className="imgWrapper">
                    <img className='w-100' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" alt="" />
                  </div>
                  <div className="info px-3">
                    <h6>Best ever ginger cookies</h6>
                    <Rating
          className="mt-2 mb-2"
          name="read-only"
          value={4.5}
          readOnly
          size="small"
          precision={0.5}
        />
                  </div>
                </div>
                </Link>
              </td >
              <td width={'15%'}>$5.25</td>
              <td width={'10%'} className='quantityBox'>
                <input type="number" name="" id="" value={1} />
              </td>
              <td width={"15%"}>
                $5.25
              </td>
              <td width={"15%"}>
              <MdDelete className='ml-3' />

              </td>

            </tr>
          </tbody>
        </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-3 cartDetails">
              <h4 className='hd'>CART TOTALS</h4>
              <hr />
              <div className="d-flex align-items-center mt-2">
                <span>Subtotal</span>
                <span className='ml-auto text text-danger hd'>$12.35</span>
              </div>
              <div className="d-flex align-items-center mt-2">
                <span>Estimate for</span>
                <span className='ml-auto text'>Pakistan</span>
              </div>
              <div className="d-flex align-items-center mt-2">
                <span>Shipping</span>
                <span className='ml-auto text'><b>Free</b></span>
              </div>
              <div className="d-flex align-items-center mt-2">
                <span>Total</span>
                <span className='ml-auto text text-danger hd'>$12.35</span>
              </div>
              <Button className='checkout mt-3 btn-purple'>Check Out</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart