import { CardComponent } from "./CardComponent";
import { Links } from "../utils/links";

export const LinkTreeComponent = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <ul className="steps steps-vertical">
        {Links?.map((item) => {
          const { id, linkName, linkURL } = item;

          return (
            <li key={id} className="step step-primary mb-10 text-cyan-50">
              <CardComponent id={id} linkName={linkName} linkURL={linkURL} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
