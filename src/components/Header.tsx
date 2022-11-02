import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["LINKTREE", "Ayanava Karmakar"];

export const Header = () => {
  const [index, setIndex] = useState(0);
  const INTERVAL_MS = 5000;

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      INTERVAL_MS
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <article className="prose prose-xl dark:prose-invert m-5">
        <h1 className="font-extrabold capitalize tracking-wide text-cyan-50 underline underline-offset-8 decoration-dotted decoration-cyan-100">
          <TextTransition springConfig={presets.gentle} direction={"down"}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>
      </article>
    </div>
  );
};
