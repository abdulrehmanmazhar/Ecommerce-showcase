import React from "react";
import { useEffect, useRef, useState } from "react";
// import { GrPrevious, GrNext } from "react-icons/gr";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


function HomeBanner({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [record, setRecord] = useState([]);
  const parentRef = useRef(null);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  let indFunc = function (record) {
    return () => {
      const currentIndicator = parentRef.current.childNodes[currentIndex];

      // Assign the "now" class to the current indicator
      currentIndicator.id = 'now';

      // Update the record array
      let arrayState = [...record, currentIndicator];
      setRecord(arrayState);
      let vanish = record[record.length - 1];
      if (vanish) {
        vanish.id = "";
      }
    };
  };
  let cloIndFunc = indFunc(record);
  useEffect(() => {
    cloIndFunc();
  }, [currentIndex]);

  useEffect(() => {
    // Set up the interval
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className='carousel'>
      <div className='image'>
        <img src={images[currentIndex]} alt="" />
      </div>
      <div className="controls">
        <div className='buttons'>
          <FaAngleLeft
          className='prev' onClick={prevSlide} />
          <FaAngleRight
          className='next' onClick={nextSlide} />
        </div>
        <div className='indbtns' ref={parentRef}>
          {images.map((image, index) => (
            <div key={index} className={`ind `} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
