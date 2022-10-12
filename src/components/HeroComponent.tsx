import { motion } from "framer-motion";
import { LinkTreeComponent } from "./LinkTreeComponent";

export const HeroComponent = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://user-images.githubusercontent.com/89210438/194807936-f30efc94-0832-40f6-ae3d-38cd2f6c04a8.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-90">
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: [0.5, 1.0] }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 75,
          }}
        >
          <LinkTreeComponent />
        </motion.div>
      </div>
    </div>
  );
};
