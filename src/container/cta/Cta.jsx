import GetStarted from "../../components/Button/GetStarted";

const Cta = () => {
  return (
    <div className="bg-white my-2 p-4 px-8 md:p-8 md:px-16 mt-8 lg:p-12 lg:px-32 md:flex items-center justify-between rounded-xl lg:mt-12">
      <div>
        <p className="">Request Early Acess to Get Started</p>
        <h1 className="font-semibold text-xl">
          Exclusive Access Coming Soon: Join Our Waiting List!
        </h1>
      </div>
      <div className="py-5">
        <GetStarted title="Get Early Access" className="" />
      </div>
    </div>
  );
};

export default Cta;
