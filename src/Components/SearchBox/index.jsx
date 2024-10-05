import React from 'react'
import Button from "@mui/material/Button";
import { IoIosSearch } from "react-icons/io";
function SearchBox() {
  return (
    <div className="headerSearch ml-3 mr-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search for products..."
                  />
                  <Button>
                    <IoIosSearch />
                  </Button>
                </div>
  )
}

export default SearchBox