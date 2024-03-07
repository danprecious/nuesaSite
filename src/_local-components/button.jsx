
const CustomButton = ({text, background, textColor}) => {
  return (
    <button className={`px-10 py-3 rounded-[2em] border-[2px] bg-${background} text-${textColor} border-solid text-[1.2rem] font-medium mx-2`}>{text}</button>
  )
}

export default CustomButton;
