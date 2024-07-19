

const Button = ({text, styles}) => {
  return (
    <button type="button" className={`py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:scale-[1.1] hover:transition-transform ${styles}`}>
      {text}
    </button>
  )
}

export default Button