import { api } from "~/utils/api";
import {
  ChatBubbleBottomCenterIcon,
  PhotoIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";

type GenerationType = "chat" | "image" | "audio";

export default function GenerationsList() {
  const { data: generations, isFetching: isFetchingGenerations } =
    api.generations.getGenerations.useQuery();

  const getIcon = (type: GenerationType) => {
    const classNames =
      "h-12 w-12 flex-none rounded-full bg-espresso-darker p-2";
    switch (type) {
      case "chat":
        return <ChatBubbleBottomCenterIcon className={classNames} />;
      case "image":
        return <PhotoIcon className={classNames} />;
      case "audio":
        return <MusicalNoteIcon className={classNames} />;
    }
  };

  const getGenerationTitle = (type: GenerationType, id: string) => {
    switch (type) {
      case "chat":
        return `Chat - ${id}`;
      case "image":
        return `Image - ${id}`;
      case "audio":
        return `Audio - ${id}`;
    }
  };

  return (
    <ul
      role="list"
      className="card w-full relative max-w-7xl bg-espresso-lighter p-8 drop-shadow-2xl overflow-hidden"
    >
      {isFetchingGenerations && <div className="loading absolute loading-dots loading-lg text-espresso right-2 top-2" />}
      {generations?.map((generation) => (
        <li key={generation.id} className="flex justify-between gap-x-6 py-5  border-b border-espresso-darker">
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              {getIcon(generation.type)}
              <p className="text-sm font-semibold capitalize leading-6 text-gray-900">
                {getGenerationTitle(generation.type, generation.id)}
              </p>
              <p className="mt-1 line-clamp-3 truncate text-xs leading-5 text-gray-800">
                <span className="font-bold">Prompt:</span>
                {` ${generation.prompt}`}
              </p>
            </div>
          </div>
          {/* <div className="hidden sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-white">{person.role}</p>
            {generation.ou ? (
              <p className="mt-1 text-xs leading-5 text-gray-400">
                Last seen{" "}
                <time dateTime={person.lastSeenDateTime}>
                  {person.lastSeen}
                </time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-400">Online</p>
              </div>
            )}
          </div> */}
        </li>
      ))}
    </ul>
  );
}
