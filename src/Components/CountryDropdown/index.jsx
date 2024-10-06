import React, { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import CountryContext from "../../Contexts/Countries/CountryContext";

function CountryDropdown() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [location, setLocation] = useState("Location");
  const [search, setSearch] = useState("");

  // context imported

  let { countries } = useContext(CountryContext);
  countries = countries.map((item) => item.country);

  return (
    <>
      <Button
        className="countryDrop"
        onClick={() => {
          setIsOpenModal((prev) => !prev);
        }}
      >
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{location}</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog className="locationModal" open={isOpenModal}>
        <h3>Choose your delivery location</h3>
        <p>Enter your address and we'll specify offer for your area</p>
        <Button
          onClick={() => {
            setIsOpenModal((prev) => !prev);
          }}
          className="close_"
        >
          <IoMdClose />
        </Button>
        <div className="headerSearch w-100">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search your area..."
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <Button>
            <IoIosSearch />
          </Button>
        </div>
        <ul className="countryList">
          {countries
            .filter((item) => {
              return search.toLowerCase() == ""
                ? item
                : item.toLowerCase().includes(search);
            })
            .map((item, index) => (
              <li
                className={`${location == item ? "active" : ""}`}
                key={index}
                onClick={() => {
                  setIsOpenModal((prev) => !prev);
                  setLocation(item);
                }}
              >
                <Button>{item}</Button>
              </li>
            ))}
        </ul>
      </Dialog>
    </>
  );
}

export default CountryDropdown;
