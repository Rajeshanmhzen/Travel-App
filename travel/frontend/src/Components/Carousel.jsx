import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => (


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
      <img src="https://s3-alpha-sig.figma.com/img/73d1/c4fd/34b45be070d911e62d5ad75e9c242cd6?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=liZyKGckXo~BqlnG5SLn86LUMrZeSu8CKsb3Bi4ZV4c38LeqWjo-PtshRUOjnpZB6HhNfon4lcXyQbRqQyZ1RnHhC77Z05JulzdM~cRij4waMs4QThOFwzWK3Mlg3Xx5RBc-XMAieRsIP4gHMDvljz5NVdWLQ-u6NgiGwM5w1nbCj5dBG2HHPyhXYLgb0QcTRmV61ZPSy7UOZAbsSRo-TD-cHmN25-~qC8Cd9a6dW6VgCALwF5i-b7c0QJ3CUjRb4L0K6dyYcdEkR6WZ~VUiV-OKr8JjJwFJx0Z4nNHSL3gNczh4ZibAYdF1Er90C8C33sZCKShINY1CncaF5VWjtQ__" alt="Slide 1" />
    </div>
    <div>
      <img src="https://s3-alpha-sig.figma.com/img/73d1/c4fd/34b45be070d911e62d5ad75e9c242cd6?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=liZyKGckXo~BqlnG5SLn86LUMrZeSu8CKsb3Bi4ZV4c38LeqWjo-PtshRUOjnpZB6HhNfon4lcXyQbRqQyZ1RnHhC77Z05JulzdM~cRij4waMs4QThOFwzWK3Mlg3Xx5RBc-XMAieRsIP4gHMDvljz5NVdWLQ-u6NgiGwM5w1nbCj5dBG2HHPyhXYLgb0QcTRmV61ZPSy7UOZAbsSRo-TD-cHmN25-~qC8Cd9a6dW6VgCALwF5i-b7c0QJ3CUjRb4L0K6dyYcdEkR6WZ~VUiV-OKr8JjJwFJx0Z4nNHSL3gNczh4ZibAYdF1Er90C8C33sZCKShINY1CncaF5VWjtQ__" alt="Slide 2" />
    </div>
    <div>
      <img src="https://s3-alpha-sig.figma.com/img/73d1/c4fd/34b45be070d911e62d5ad75e9c242cd6?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=liZyKGckXo~BqlnG5SLn86LUMrZeSu8CKsb3Bi4ZV4c38LeqWjo-PtshRUOjnpZB6HhNfon4lcXyQbRqQyZ1RnHhC77Z05JulzdM~cRij4waMs4QThOFwzWK3Mlg3Xx5RBc-XMAieRsIP4gHMDvljz5NVdWLQ-u6NgiGwM5w1nbCj5dBG2HHPyhXYLgb0QcTRmV61ZPSy7UOZAbsSRo-TD-cHmN25-~qC8Cd9a6dW6VgCALwF5i-b7c0QJ3CUjRb4L0K6dyYcdEkR6WZ~VUiV-OKr8JjJwFJx0Z4nNHSL3gNczh4ZibAYdF1Er90C8C33sZCKShINY1CncaF5VWjtQ__" alt="Slide 3" />
    </div>
  </Carousel>

);

export default MyCarousel;