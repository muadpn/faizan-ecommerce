import FeatureCards from "../../components/Feature/FeatureCards";
import FeatureTitle from "../../components/Feature/FeatureTitle";
import FeaturesData from "../../assets/Data/Feature.js";
import { v4 as uuid } from "uuid";
const Features = () => {
  return (
    <>
      <article className="">
        <FeatureTitle />
      </article>
      <div className="">

      <article className="flex flex-col gap-y-6 ">
        {FeaturesData.map((item) => {
          return <FeatureCards key={uuid()} title={item.title} Discription={item.Discription} images={item.images} />;
        })}
        {/* <FeatureCards/> */}
      </article>
        </div>
    </>
  );
};

export default Features;
