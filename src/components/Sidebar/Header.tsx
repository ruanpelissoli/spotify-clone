import { BiHomeAlt, BiSearch } from 'react-icons/bi';

export default function Header() {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 mb-2">
      <p className="text-gray-500 text-xl font-bold mb-5 hover:text-white cursor-pointer transition-all">
        <BiHomeAlt className="inline-block mr-2 text-3xl" /> Home
      </p>
      <p className="text-gray-500 text-xl font-bold hover:text-white cursor-pointer transition-all">
        <BiSearch className="inline-block mr-2 text-3xl" /> Search
      </p>
    </div>
  );
}
