import './index.css'

// Write your code here.

const BannerCardItem = props => {
  const {listDetails} = props
  const {headerText, description, className} = listDetails
  const listStyle = `cart ${className}`
  return (
    <li className={listStyle}>
      <h1 className="heading1">{headerText}</h1>
      <p className="description">{description}</p>
      <button type="button" className="btn">
        Show More
      </button>
    </li>
  )
}

export default BannerCardItem
