import React, { useContext } from "react";
import logo from "../../assets/logo.png";

import Button from "@mui/material/Button";

import { LuUser2 } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import SearchBox from "../SearchBox";
import UserContext from "../../Contexts/UserContext/UserContext";
function Header() {
  const {login, setUserModal} = useContext(UserContext);
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purpler">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Limited stock available at amazing <b>50% SALES</b> discount
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center justify-content-center col-sm-2">
                <Link to={"/"}>
                  {" "}
                  <img src={logo} alt="logo" />{" "}
                </Link>
              </div>
              <div className="part2 d-flex align-items-center col-sm-10">
                <CountryDropdown />

                {/* header searchbar starting */}

                <SearchBox />
                {/* header searchbar ending */}
                <div className="part3 d-flex align-items-center ml-auto">
                  {login?
                  <Button className="circle mr-3">
                    <LuUser2 />
                  </Button>
                  : <Button className="btn-purple signin-btn " onClick={()=>setUserModal(true)}>SIGN IN</Button>}
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price ml-3">$3.29</span>
                    <div className="position-relative ml-2">
                      <Button className="circle">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <nav>
          <div className="container">
            <div className="row">
              <div className="navPart1 col-sm-3">
                <div className="catWrapper">
                  <Button className="allCatTab">
                    <span className="text">All Categories</span>
                    <span>
                      <FaAngleDown />
                    </span>
                  </Button>
                  <div className="submenu shadow d-flex flex-column">
                    <Link to={"/"}>
                      <Button>Category X</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Category X</Button>
                    </Link>
                    <div className="subSubMenuWrapper">
                      <Link to={"/"}>
                        <Button>
                          Category X <FaAngleRight />
                        </Button>
                      </Link>
                      <div className="subSubMenu shadow">
                      <Link to={"/"}>
                      <Button>Category X</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Category X</Button>
                    </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navPart2 col-sm-9 d-flex align-items-center">
                <ul className="list list-inline w-100">
                  <li className="list-inline-item">
                    {" "}
                    <Link to={"/"}> Home</Link>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <Link to={"/"}>Best Selling</Link>{" "}
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/"}>
                      Premium <FaAngleDown />
                    </Link>
                    <div className="submenu shadow">
                      <Link to={"/"}>
                        <Button>Premium X</Button>
                      </Link>
                      <Link to={"/"}>
                        <Button>Premium X</Button>
                      </Link>
                      <Link to={"/"}>
                        <Button>Premium X</Button>
                      </Link>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <Link to={"/"}>Hot Sales</Link>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <Link to={"/"}>New In</Link>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <Link to={"/"}>Contact Us</Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <hr />
      </div>
    </>
  );
}

export default Header;
