import { ArrowRedirect } from "../utils/icons";

export const NavbarComponent = () => {
  return (
    <div className="navbar bg-gradient-to-r from-indigo-600 bg-auto text-primary-content">
      <h2 className="flex-1 font-mono text-3xl font-bold tracking-wide text-cyan-200  subpixel-antialiased">
        ELFIN
      </h2>
      <div className="flex-none">
        <a
          href="https://github.com/AyanavaKarmakar/ELFIN"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost btn-square"
        >
          <ArrowRedirect />
        </a>
      </div>
    </div>
  );
};
