import { ArrowRedirect } from "../utils/icons";
import { motion } from "framer-motion";

export const NavbarComponent = () => {
  return (
    <div className="navbar bg-gradient-to-r from-indigo-600 bg-auto text-primary-content">
      <h2 className="flex-1 font-mono text-3xl font-bold tracking-wide text-cyan-200 subpixel-antialiased">
        <motion.div initial={{ scale: 0.8 }} whileHover={{ scale: 1.0 }}>
          ELFIN
        </motion.div>
      </h2>
      <div className="flex-none">
        <motion.div initial={{ scale: 1.0 }} whileHover={{ scale: 1.2 }}>
          <a
            href="https://github.com/AyanavaKarmakar/ELFIN"
            target="_blank"
            rel="noreferrer"
            className="btn-glass btn btn-ghost no-animation"
          >
            <ArrowRedirect />
          </a>
        </motion.div>
      </div>
    </div>
  );
};
