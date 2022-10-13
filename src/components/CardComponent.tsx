import { ArrowRedirect } from "../utils/icons";
import { LinkType } from "../utils/links";
import { motion } from "framer-motion";

export const CardComponent = (props: LinkType) => {
  const { linkName, linkURL } = props;

  return (
    <div className="card glass card-bordered w-80 items-center">
      <div className="card-title">
        <h2 className="text-base-0 card-title">{linkName}</h2>
        <div className="card-actions">
          <motion.div initial={{ scale: 1.0 }} whileHover={{ scale: 1.2 }}>
            <a
              href={linkURL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-circle no-animation"
            >
              <ArrowRedirect />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
