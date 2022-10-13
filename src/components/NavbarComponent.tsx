import { ArrowRedirect } from "../utils/icons";
import { motion } from "framer-motion";

export const NavbarComponent = () => {
  return (
    <div className="navbar bg-gradient-to-r from-indigo-600 bg-auto text-primary-content">
      <div className="navbar-start">
        <motion.div
          initial={{ scale: 0.0 }}
          animate={{ scale: 1.0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <h2 className="font-mono text-3xl font-extrabold tracking-wide subpixel-antialiased">
            Ayanava Karmakar
          </h2>
        </motion.div>
      </div>
      <div className="navbar-end">
        <motion.div
          initial={{ scale: 0.0 }}
          animate={{ scale: 1.0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.0 }}
        >
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
