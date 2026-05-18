const Card = ({children}) => {
  return (
    <div className="border cursor-pointer shrink-0 border-(--platinum) shadow-md overflow-hidden rounded-xl hover:shadow-xl m-2">{children}</div>
  )
}

export default Card;