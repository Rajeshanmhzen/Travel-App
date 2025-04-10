const Button = ({
    value,
    icons,
    hasBackground = true,
    hasBorder = true,
    variant
  }) => {
    // Style configurations based on variant
    const variantStyles = {
      primary: {
        bg: "bg-blue-300 hover:bg-blue-200",
        text: "text-black",
        border: "border-black"
      },
      secondary: {
        border: "border-blue-300 hover:bg-blue-200",
        text: "text-black",
      },
      green: {
        text: "text-green-500",
        bg: "bg-green-200 hover:bg-green-300",
      },
      blue: {
        text: "text-blue-400",
        bg: "bg-green-200 hover:bg-green-300",
      },
     
    };
  
    // Get the correct style based on variant
    const style = variantStyles[variant] || variantStyles.primary;
  
    return (
      <div>
        <button 
          className={`
            rounded
             transition
            ${hasBackground ? style.bg : 'bg-transparent hover:bg-gray-100'}
            ${hasBackground ? style.text : style.text}
            ${hasBorder ? `border ${style.border}` : 'border-0'}
          `}

        >
          {
            icons ? (
              <div className="flex items-center gap-2 py-2 px-4 ">
                <span className='text-[16px]'>{icons}</span>
                <span className="text-[14px]">{value}</span>
              </div>
            ) : (
                <div className="flex items-center gap-2 py-2 px-4">
                <span className="text-[14px]">{value}</span>
              </div>
            )
          }
        </button>
      </div>
    );
  };
  
  export default Button;