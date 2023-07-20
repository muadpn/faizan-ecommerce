import Cta from "../../container/cta/Cta";
import Features from "../../container/features/Features";
import Footer from "../../container/footer/Footer";
import HeroContainer from "../../container/hero/HeroContainer";

const Home = () => {
  return (
    <>
      <header className="py-7 flex flex-col-reverse md:grid md:grid-cols-2 md:place-items-center ">
        <HeroContainer />
      </header>
      <main className="bg-white rounded-xl p-2 md:p-10">
        <section>
          {/* <Features /> */}
          <Features />
        </section>
      </main>
        <section>
          <article>
            <Cta/>
          </article>
        </section>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Home;
