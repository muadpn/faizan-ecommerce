
const GetStarted = ({title, className}) => {
  return (
    <button className="bg-[#3E3A3A] rounded-md px-4 py-2 max-w-fit ">
        <p className={`text-white font-medium whitespace-nowrap`}> {title ? title : "Get Started" }</p>
      </button>
  )
}

export default GetStarted