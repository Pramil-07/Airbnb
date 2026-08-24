interface CustombuttonProps{
    lable : string
    className?: string
    onClick?: ()=> void;
}

const CustomButton: React.FC<CustombuttonProps>= ({
   lable,
   className,
   onClick
}) => {
    return (
        <div 
            onClick={onClick}
            className={`w-full py-4 bg-red-500 hover:bg-red-600 text-white text-center rounded-xl transition cursor-pointer ${className}`}
        >
            {lable}
        </div>
    )
}

export default CustomButton;