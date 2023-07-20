import { mat, boat, chairShawl, saffron } from "../../assets/Images/index";

const HeroImage = () => {
  return (
    <>
      <div className="grid grid-flow-col place-content-center relative right-8">
        <div>
          <img
            src={saffron}
            alt=""
            className="w-60 h-48 rounded-tl-3xl rounded-br-3xl relative left-16 -z-10"
          />
          <img
            src={mat}
            alt=""
            className="w-60 h-48  bottom-10 relative left-16 -z-20 rounded-tl-[4rem] rounded-br-[8rem]"
          />
        </div>
        <div>
          <img
            src={chairShawl}
            alt=""
            className="w-60 h-48 rounded-bl-[4rem] rounded-tr-3xl z-0 relative"
          />
          <img
            src={boat}
            alt=""
            className="w-60 h-48 relative bottom-10 -z-10 rounded-br-3xl"
          />
        </div>
      </div>
    </>
  );
};

export default HeroImage;
