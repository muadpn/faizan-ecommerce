import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo.png";
const Navbar = () => {
  return (
   <>
   <nav className="flex items-center justify-between sticky top-0 bg-[#EBEBEB] rounded-b-3xl py-4 z-50 ">
    <img src={logo} alt="hello" className="w-10 md:w-20" />
    <div className="space-x-9 font-semibold">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </div>
      <Link to="/Login">Login</Link>
   </nav>
   </>
  )
}

export default Navbar