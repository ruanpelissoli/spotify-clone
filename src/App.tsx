import { Sidebar } from 'src/components';
import ProgressBar from '@ramonak/react-progress-bar';
import {
  IoPlaySkipForwardSharp,
  IoPlaySkipBackSharp,
  IoPlayCircle,
  IoRepeatOutline,
} from 'react-icons/io5';
import { LiaRandomSolid } from 'react-icons/lia';

import AppRouter from 'src/routes/routes';

export default function App() {
  return (
    <>
      <div className="bg-black p-2 h-screen max-h-full max-w-screen flex">
        <Sidebar />
        <div className="flex-1 flex flex-col p-2 h-full">
          <AppRouter />
        </div>

        <div className="fixed bottom-0 left-0 w-full">
          <div className="flex justify-between bg-black p-3 text-white">
            <div className="flex items-center mb-3">
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
            <div className="w-1/2 text-base">
              <div className="flex flex-row justify-center items-center py-5">
                <LiaRandomSolid className="text-2xl mx-3" />
                <IoPlaySkipBackSharp className="text-2xl mx-3" />
                <IoPlayCircle className="text-4xl mx-3" />
                <IoPlaySkipForwardSharp className="text-2xl mx-3" />
                <IoRepeatOutline className="text-2xl mx-3" />
              </div>
              <ProgressBar completed={60} bgColor="white" height="6px" />
            </div>
            <div></div>
          </div>
        </div>
        {/* <div className="w-96">
        
      </div> */}
      </div>
    </>
  );
}
