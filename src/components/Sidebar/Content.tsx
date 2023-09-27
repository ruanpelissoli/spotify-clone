import { BiSearch, BiPlus, BiRightArrowAlt, BiListUl } from 'react-icons/bi';
import { VscLibrary } from 'react-icons/vsc';

export default function Content() {
  return (
    <div className="bg-zinc-900 rounded-lg p-4">
      <div className="flex justify-between">
        <p className="text-gray-500 text-xl font-bold mb-5 hover:text-white cursor-pointer transition-all">
          <VscLibrary className="inline-block mr-2 text-3xl" /> Your Library
        </p>
        <div className="flex flex-row">
          <span>
            <BiPlus className="text-gray-500 text-4xl mr-3" />
          </span>
          <span>
            <BiRightArrowAlt className="text-gray-500 text-4xl" />
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <button className="text-sm text-white font-bold bg-zinc-700 px-3 py-2 rounded-full mr-1">
          Playlists
        </button>
        <button className="text-sm text-white font-bold bg-zinc-700 px-3 py-2 rounded-full mr-1">
          Podcastas & Shows
        </button>
        <button className="text-sm text-white font-bold bg-zinc-700 px-3 py-2 rounded-full mr-1">
          Albums
        </button>
        <button className="text-sm text-white font-bold bg-zinc-700 px-3 py-2 rounded-full">
          Artists
        </button>
      </div>
      <div className="flex flex-row justify-between my-4">
        <p className="text-gray-500 text-xl font-bold hover:text-white cursor-pointer transition-all">
          <BiSearch className="inline-block mr-2 text-xl text-gray-500" />
        </p>
        <p className="text-gray-500 text-md font-bold hover:text-white cursor-pointer transition-all">
          Recents{' '}
          <BiListUl className="inline-block mr-2 text-gray-500 text-xl" />
        </p>
      </div>
      <div className="flex flex-col justify-start overflow-y-auto max-h-full">
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className="flex items-center mb-3">
            <img
              src="https://via.placeholder.com/60"
              alt="Placeholder"
              className="rounded-md mr-3"
            />
            <div>
              <h2 className="text-lg font-bold text-white">Title</h2>
              <p className="text-gray-500 font-bold">Subtitle</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
