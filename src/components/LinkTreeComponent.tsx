import { CardComponent } from "./CardComponent";

export const LinkTreeComponent = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <ul className="steps steps-vertical">
        <li className="step step-primary mb-10 text-cyan-50">
          <CardComponent />
        </li>
        <li className="step step-primary mb-10 text-cyan-50">
          <CardComponent />
        </li>
        <li className="step step-primary mb-10 text-cyan-50">
          <CardComponent />
        </li>
      </ul>
    </div>
  );
};
