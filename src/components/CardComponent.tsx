import { LinkType } from "../utils/links";

export const CardComponent = (props: LinkType) => {
  const { linkName } = props;

  return (
    <div className="card glass card-bordered card-compact w-80">
      <div className="card-body">
        <h2 className="text-base-0 card-title">{linkName}</h2>
      </div>
    </div>
  );
};
