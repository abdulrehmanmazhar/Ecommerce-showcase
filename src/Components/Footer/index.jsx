import React from 'react'
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaEnvira } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="container">
        <div className="topInfo row">
            <div className="col">
            <MdOutlineWorkspacePremium />
            <p>Premium</p>
            </div>
            <div className="col">
            <FaEnvira />
            <p>Eco Friendly</p>
            </div>
            <div className="col">
            <FaSackDollar />
            <p>Budget Friendly</p>
            </div>
            <div className="col">
            <FaShippingFast />
            <p>Fast Shipping</p>
            </div>
        </div>
        <hr className='mb-5' />
        <div className="bottomTable row">
            <div className="col">
            <h5 className="bold">  LINK</h5>
                <ul>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                </ul>
            </div>
            <div className="col">
            <h5 className="bold">LINK</h5>
                <ul>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                </ul>
            </div>
            <div className="col">
                <h5 className="bold">LINK</h5>
                <ul>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                </ul>
            </div>
            <div className="col">
                <h5 className="bold">LINK</h5>
                <ul>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                </ul>
            </div>
            <div className="col">
                <h5 className="bold">LINK</h5>
                <ul>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                    <li><Link to='#'>Suits</Link></li>
                </ul>
            </div>
            
        </div>

        <div className="copyright mt-3 pt-3 pb-3 d-flex align-items-center">
            <p>CopyRights 2024. All rights reserved</p>
            <ul className='list list-inline ml-auto mb'>
                <li className='list-inline-item'><Link><FaFacebook />
                </Link></li>
                <li className='list-inline-item'><Link><FaInstagram />
                </Link></li>
                <li className='list-inline-item'><Link><FaTwitter />
                </Link></li>

            </ul>
        </div>
    </div>
  )
}

export default Footer