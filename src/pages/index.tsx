import type { NextPage } from "next";
import { HeroComponent, NavbarComponent } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main>
        <HeroComponent />
      </main>
    </>
  );
};

export default Home;
