import type { NextPage } from "next";
import { FooterComponent, HeroComponent, NavbarComponent } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main>
        <HeroComponent />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};

export default Home;
