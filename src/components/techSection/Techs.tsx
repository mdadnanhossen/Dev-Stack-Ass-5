import type { Technology } from "../../types/techType";

type TechCardProps = {
  tech: Technology;
  saved: Technology[];
  handleSavedTech: (tech: Technology) => void;
};

const Techs = ({ tech, handleSavedTech, saved }: TechCardProps) => {
  // console.log("TECH:", tech);

  const { id, name, category, description, icon, rating, difficulty, badge } =
    tech;

  const selected = saved.some((item) => item.id === id);

  return (
   
    <article
      className={`group flex flex-col rounded-xl border-2 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg ${
        selected ? "border-pink-500" : "border-gray-200"
      }`}
    >
 
      <div className="flex items-start justify-between">
        <img src={icon} alt={name} className="h-7 w-7 object-contain" />

        <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-600">
          {badge}
        </span>
      </div>


      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-base font-bold text-gray-900">{name}</h3>

        <p className="mt-1 min-h-[60px] text-xs leading-5 text-gray-500">
          {description}
        </p>

 
        <div className="mt-4 flex items-center justify-between text-[10px] text-gray-500">
          <span className="rounded bg-gray-100 px-2 py-1">{category}</span>

          <span>{difficulty}</span>

          <span className="flex items-center gap-1">★ {rating}</span>
        </div>

        <button
          disabled={selected}
          onClick={() => handleSavedTech(tech)}
          className="mt-3 flex min-h-9 items-center justify-center rounded-md bg-[#0b1020] text-xs font-semibold text-white transition hover:bg-[#1a2135] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
        >
          {selected ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
};

export default Techs;
