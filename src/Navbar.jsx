import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="pt-2 shadow-lg">
        <NavBar2 to="/">Home</NavBar2>
        <NavBar2 to="/Contact">Contact</NavBar2>
        <NavBar2 to="/about">About</NavBar2>
      </ul>
    </nav>
  )
}

function NavBar2({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
