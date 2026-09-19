import { use } from "react";
import type { Technology } from "../../types/techType";
import Techs from "./Techs";

type TechProps = {
  techPromise: Promise<Technology[]>;
  saved: Technology[];
  handleSavedTech: (tech: Technology) => void;
};

const Tech = ({ techPromise, saved, handleSavedTech }: TechProps) => {
  const allTech = use(techPromise);

  console.log(allTech);

  return (
    <div className="col-span-3">
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Pick one technology category to build your ideal stack.
        </p>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-5">
        {allTech.length === 0 && <p>No technology found</p>}

        {allTech.map((singleTech) => (
          <Techs
            key={singleTech.id}
            tech={singleTech}
            saved={saved}
            handleSavedTech={handleSavedTech}
          />
        ))}
      </div>
    </div>
  );
};

export default Tech;
