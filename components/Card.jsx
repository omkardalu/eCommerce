const Card = ({children}) => {
  return (
    <div className="border cursor-pointer border-(--platinum) shadow-md overflow-hidden rounded-xl m-2">{children}</div>
  )
}

export default Card;