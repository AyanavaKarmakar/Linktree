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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
