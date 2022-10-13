import { ArrowRedirect } from "../utils/icons";
import { LinkType } from "../utils/links";

export const CardComponent = (props: LinkType) => {
  const { linkName, linkURL } = props;

  return (
    <div className="card glass card-bordered w-80 items-center">
      <div className="card-title">
        <h2 className="text-base-0 card-title">{linkName}</h2>
        <div className="card-actions">
          <a
            href={linkURL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-circle"
          >
            <ArrowRedirect />
          </a>
        </div>
      </div>
    </div>
  );
};
