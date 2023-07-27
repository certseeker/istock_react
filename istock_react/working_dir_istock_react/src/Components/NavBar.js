import { Link } from "react-router-dom";

export default function NavBar () {
  return(
    <div><div>
    <Link to="/home">
      <h1>iStocks</h1>
    </Link>
    <ul id="micro-nav">
    <Link to="/stocks">
      <li>
        Stocks
      </li>
    </Link>
    <Link to="/about">
      <li>
        About
      </li>
    </Link>
    </ul>
    </div></div>
  )
}