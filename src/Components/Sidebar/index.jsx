import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PriceSlider from '../PriceSlider';
import banner from '../../assets/banner1.jpg'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="filterBox">
        <h6>PRODUCT CATEGORIES</h6>
        <div className="scroll">
          <ul>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
          </ul>
        </div>
      </div>
      <PriceSlider></PriceSlider>
      <div className="filterBox mt-5">
        <h6>PRODUCT CATEGORIES</h6>
        <div className="scroll">
          <ul>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
            <li>        <FormControlLabel control={<Checkbox />} label="Label" />  </li>
          </ul>
        </div>
      </div>
      <img className='w-100 mt-5' src={banner} alt="" />
    </div>
  )
}

export default Sidebar