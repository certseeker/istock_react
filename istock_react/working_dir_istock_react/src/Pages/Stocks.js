import { Link } from "react-router-dom";

export default function Stocks(props) {
  return(
    <div>
    <h1 className="stock-tab-header">Stocks</h1>
      <Link to="/stocks">
        <ul id="stock-list">
          <li>Apple Inc.</li>
          <li>Microsoft Corp</li>
          <li>Alphabet Inc</li>
          <li>Meta</li>
          <li>Oracle Corporation</li>
          <li>Intel Corporation</li>
        </ul>
      </Link>
    </div>
  )
}