import mail from "../../assets/Images/Mail.png"
import whatsApp from "../../assets/Images/whatsapp.png"
import Instagram from "../../assets/Images/Instagram.png"
const Footer = () => {
  return (
    <div className="mb-12 mt-6">
      <h1 className="font-bold text-4xl">Connect with Us</h1>
      <div className="bg-white flex flex-col w-full sm:w-fit p-6 mt-6 rounded-lg">
        <div className="flex my-2 space-x-6 font-semibold" >
          <img src={mail} alt="" />
          <a target="_blank" href="mailto:faizan@gmail.com" rel="noreferrer">faizan@gmail.com</a>
        </div>
        <div className="flex my-2 space-x-6 font-semibold" >
          <img src={whatsApp} alt="" />
          <a href="wa.link/ktlgxc">8082953513</a>
        </div>
        <div className="flex my-2 space-x-6 font-semibold" >
          <img src={Instagram} alt="" />
          <a href="https://instagram.com/fjz_7?igshid=MzRlODBiNWFlZA==">Faizan Javied</a>
        </div>
      </div>
    </div>
  )
}

export default Footer