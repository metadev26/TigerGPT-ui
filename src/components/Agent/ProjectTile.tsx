import { getUserApiKey } from '@/utils/settings';
import { FC } from 'react';

export const ProjectTile: FC = () => {
  return (
    <div className="flex h-full select-none flex-col items-center justify-center gap-2 text-3xl font-semibold text-neutral-300 dark:text-neutral-500 md:text-4xl">
      <div className="inline-flex items-center gap-2">
        BabyAGI{' '}
        <span className="rounded bg-blue-200 px-1 text-lg text-blue-600 md:text-2xl">
          UI
        </span>
      </div>
      {!getUserApiKey() && (
        <div className="inline-flex items-center gap-2">
          <span className="rounded px-1 text-sm font-normal md:text-base">
            👉 You must set your OpenAI API key in the settings menu.
          </span>
        </div>
      )}
    </div>
  );
};
