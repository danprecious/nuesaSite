
const CustomButton = ({text, background, textColor}) => {
  return (
    <button className={`px-3 py-2 rounded-md border-[2px] bg-${background} text-${textColor} border-solid text-xs mx-2`}>{text}</button>
  )
}

export default CustomButton;
