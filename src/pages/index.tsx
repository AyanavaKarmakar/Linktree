import type { NextPage } from "next";
import { NavbarComponent } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main>
        <article className="prose">
          <h1>Home Page</h1>
        </article>
      </main>
    </>
  );
};

export default Home;
