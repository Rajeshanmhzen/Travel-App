import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselForHome = () => {
  return (
    <>
     <Carousel
    className="rounded-3xl overflow-hidden"
    autoPlay
    infiniteLoop
    showThumbs={false}
    showArrows={false}
    showStatus={false}
    renderIndicator={(onClickHandler, isSelected, index, label) => {
      // Custom styles for the indicators
      const indicatorStyle = {
        width: isSelected ? '20px' : '10px', // Oval for active, circle for inactive
        height: '10px', // Same height for both
        borderRadius: isSelected ? '5px' : '50%', // Oval for active, circle for inactive
        backgroundColor: isSelected ? '#007BFF' : '#CCCCCC', // Blue for active, gray for inactive
        display: 'inline-block',
        margin: '0 4px', // Spacing between indicators
        cursor: 'pointer',
        transition: 'all 0.3s ease', // Smooth transition
      };

      return (
        <span
          style={indicatorStyle}
          onClick={onClickHandler}
          onKeyDown={onClickHandler}
          role="button"
          tabIndex={0}
          title={`${label} ${index + 1}`}
          aria-label={`${label} ${index + 1}`}
        />
      );
    }}
  >
    <div>
      <img src="./carousel/carousel.jpg" alt="Slide 1" />
    </div>
    <div>
      <img src="./carousel/carousel.jpg" alt="Slide 2" />
    </div>
    <div>
      <img src="./carousel/carousel.jpg" alt="Slide 3" />
    </div>
  </Carousel>
      
    </>
  )
}

export default CarouselForHome
