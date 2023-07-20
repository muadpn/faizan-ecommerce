import GetStarted from "../Button/GetStarted";

const HeroContent = () => {
  return (
    <div className="grid place-content-center py-6">
      <h1 className="max-w-md text-5xl font-bold text-primary">
        Embrace Kashmir`s Handcrafted Treasures!
      </h1>
      <p className="text-lg py-3">
        Begin your journey into a world of exquisite craftsmanship and cultural
        wonders. Join our waiting list today and be the first to experience the
        allure of Kashmir`s handcrafted treasures.
      </p>
      <GetStarted/>
    </div>
  );
};

export default HeroContent;
