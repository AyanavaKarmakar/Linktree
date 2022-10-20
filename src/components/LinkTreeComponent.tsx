import { CardComponent } from "./CardComponent";
import { Links } from "../utils/links";

export const LinkTreeComponent = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      {Links?.map((item) => {
        const { id, linkName, linkURL } = item;

        return (
          <CardComponent
            key={id}
            id={id}
            linkName={linkName}
            linkURL={linkURL}
          />
        );
      })}
    </div>
  );
};
