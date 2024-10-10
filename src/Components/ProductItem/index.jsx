import React from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import ProductModal from "../ProductModal";
import { useState } from "react";
import { useContext } from "react";
import ModalContext from "../../Contexts/ProductModalToggle/ModalContext";
function ProductItem({classArg}) {
  // const [isOpenProductModal, setisOpenProductModal] = useState(false);
  // const toggle =()=>{setisOpenProductModal((prev)=>!prev);}
  const {toggle} = useContext(ModalContext);
  console.log(toggle)
  const viewProductDetails = (id)=>{
    toggle()
    // console.log(isOpenProductModal)
  }
  return (
    <>
    
    <div className={`item productItem ${classArg}`}>
      <div className="imgWrapper">
        <img
          className="w-100"
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
          alt=""
        />
        <span className="badge badge-primary">28%</span>
        <div className="actions">
          <Button onClick={viewProductDetails}>
            <BsArrowsFullscreen />
          </Button>
          <Button>
            <FaRegHeart />
          </Button>
        </div>
      </div>
      <div className="info">
        <h4>Ginger Cookies</h4>
        <span className="text-success d-block">In Stock</span>
        <Rating
          className="mt-2 mb-2"
          name="read-only"
          value={4.5}
          readOnly
          size="small"
          precision={0.5}
        />
        <div className="d-flex">
          <span className="oldPrice">$20.00</span>
          <span className="netPrice text-danger ml-2">$14.00</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductItem;
