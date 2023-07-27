import { Link } from "react-router-dom"

export default function Home(props) {
  return(
    <Link to="/">
      <div className="home">
        <h1>Home</h1>
      </div>
    </Link>
  )
}