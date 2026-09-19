import { FiTrash2, FiX } from 'react-icons/fi';
import type { Technology } from '../../types/techType';

type YourStackProps = {
  techs: Technology[];
  handleRemoveTech: (id: string) => void;
  handleClearAll: () => void;
};

const YourStack = ({
  techs,
  handleClearAll,
  handleRemoveTech,
}: YourStackProps) => {
  return (
    <aside className="w-full mt-[85px]">
      <div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-base font-bold text-gray-900">
              Your Stack
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              {techs.length === 0
                ? 'No technologies selected yet.'
                : `${techs.length} ${
                    techs.length === 1 ? 'technology' : 'technologies'
                  } selected`}
            </p>
          </div>

         
        </div>

        {/* Empty State */}
        {techs.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-200 py-8 text-center">
            <p className="text-xs text-gray-400">
              Your stack is empty.
            </p>
          </div>
        ) : (
          /* Selected Technologies */
          <div className="grid gap-3">
            {techs.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 rounded-lg bg-gray-50 p-3"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-7 w-7 object-contain"
                />

                <div className="min-w-0">
                  <strong className="block truncate text-xs font-semibold text-gray-900">
                    {tech.name}
                  </strong>

                  <span className="text-[10px] text-gray-400">
                    {tech.category}
                  </span>
                </div>

                <button
                  type="button"
                  className="ml-auto text-gray-400 transition hover:text-red-500"
                  onClick={() => handleRemoveTech(tech.id)}
                  aria-label={`Remove ${tech.name}`}
                >
                  <FiX />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Clear Button */}
        <button
          type="button"
          disabled={techs.length === 0}
          onClick={handleClearAll}
          className="flex min-h-9 w-full items-center justify-center gap-2 rounded-lg border border-red-200 text-xs font-bold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <FiTrash2 />
          Remove All
        </button>

      </div>
    </aside>
  );
};

export default YourStack;