export type ProjectItemType = {
  name: string;
  description: string;
  url?: string;
  icon?: React.ReactNode;
  keywords?: string[];
};

export default function ProjectItem({
  name,
  description,
  url,
  icon,
  keywords,
}: ProjectItemType) {
  return (
    <div className="flex flex-col sm:flex-row w-full border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="flex justify-center items-center h-32 w-full sm:h-full sm:w-32 border-b sm:border-b-0 border-e-0 sm:border-e bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-700 rounded-t-lg sm:rounded-t-none rounded-l-none-lg sm:rounded-l-lg">
        {icon}
      </div>
      <div className="flex flex-col gap-2 flex-1 p-4">
        <div>
          <h2 className="font-bold">
            {url ? (
              <a href={url} className="underline hover:text-gray-600 dark:hover:text-gray-400">
                {name}
              </a>
            ) : (
              name
            )}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 ">{description}</p>
        </div>
        <div className="flex flex-row flex-wrap gap-1">
          {keywords?.map((keyword) => (
            <span
              key={keyword}
              className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
