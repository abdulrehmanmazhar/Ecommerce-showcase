import React from 'react'
import ReactSlider from 'react-slider'
import { useState } from 'react';
function PriceSlider() {
    const [value, setValue] = useState([20, 80]); // Initial range

  return (
    <div className="filterBox priceFilter mt-5">
        <h6>FILTER BY PRICE</h6>
        <div>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        minDistance={5} // Minimum distance between two handles
        // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
      <div className='mt-3'>
        Price range: ${value[0]} - ${value[1]}
      </div>
    </div>
      </div>
  )
}

export default PriceSlider