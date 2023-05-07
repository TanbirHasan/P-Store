import React, { useState } from "react";
import AddVideo from "./AddVideo/AddVideo";
import EditVideo from "./EditVideo/EditVideo";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';




const tableItems = [
	{
		thumbnail: 'Portfolio generator',
		filename: 'Something went wrong',
		createddate: 'Lorem ipsum dolor sit amet',
	
	},
];



export default function VideoLibrary() {
  const [showAddVideo, setShowAddVideo] = useState(false);
	const [showEditVideo, setShowEditVideo] = useState(false);
	const [selectedVideo, setSelectedVideo] = useState(null);
 
  return (
    <>
    {showAddVideo ? (
      <AddVideo setShowAddVideo={setShowAddVideo} />
    ) : showEditVideo ? (
      <EditVideo
        setShowEditVideo={setShowEditVideo}
        selectedVideo={selectedVideo}
      />
    ) : (
      <div>
        <h1 className="text-[28px] font-bold">Video Library</h1>
 
        <hr className="mt-8 mb-10 bg-[#D9D9D9]" />

        {/* Search Users field */}
        <div className="flex items-center justify-end mb-8">
          <div className="flex gap-x-7 ">
            {/* input field */}
            <div className="flex items-center relative ">
              <input
                type="text"
                placeholder="Search by title"
                className="w-[253px] h-[40px] bg-[#FFF4D9] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[#FFD333]  border-[#FFBC0F] rounded-l-[3px] rounded-r-0 placeholder:text-black  "
              />
              <button className="w-[40px] h-[40px] bg-[#FFBC0F] border border-[#FFBC0F] rounded-r-[2px]">
                <SearchIcon />
              </button>
            </div>

            {/* add recommendation  button */}

            <button
              onClick={() => {
                setShowAddVideo(true);
              }}
              className="px-4 h-[40px] rounded-[3px] border border-[#FFBC0F] bg-[#FFBC0F]">
              <p className="text-base font-bold leading-5 flex items-center justify-center">
                <span>
                  <AddIcon />
                </span>
                <span>Add Video</span>
              </p>
            </button>
          </div>
        </div>

        {/* All users Table */}
        <div className="mb-8 ">
          <div className=" border-t overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className=" font-medium border-b">
                <tr className="text-[18px] font-[600] leading-3">
                  <th className="py-8 px-6">Thumbnail</th>
                  <th className="py-8 px-6">File Name</th>
                  <th className="py-8 px-6">Created Date</th>           
                  <th className="py-8 px-6">Action</th>
                </tr>
              </thead>
              <tbody className="text-base font-normal leading-5 ">
                {tableItems.map((item, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-[#ffbc0f26]">
                    <td className="px-6 py-8 whitespace-nowrap">{item.thumbnail}</td>
                    <td className="px-6 py-8 whitespace-nowrap">{item.filename}</td>
                    <td className="px-6 py-8 whitespace-nowrap">{item.createddate}</td>

                    <td className="px-6 py-8 whitespace-nowrap flex items-center gap-x-[10px]">
                      <button
                        onClick={() => {
                          setShowEditVideo(true);
                          setSelectedVideo(item);
                        }}>
                        <FaEdit className="text-[#1970FE] text-[20px]" />
                      </button>
                      <button>
                        <FaTrashAlt className="text-[#FF0000] text-[20px]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-start items-center mb-8">
          <button className="h-[42px] px-4 border border-[#FFBC0F]">Previous</button>
          <button className="w-[40px] h-[42px] bg-[#FFBC0F] border border-[#FFBC0F]">1</button>
          <button className="w-[40px] h-[42px] border border-[#FFBC0F]">...</button>
          <button className="h-[42px] px-4 border border-[#FFBC0F]">Next</button>
        </div>

        <h1 className="font-medium text-xl mb-10">Total - 2</h1>

        {/* Save button */}
        <button className="h-[80px] bg-[#FFBC0F] rounded-[3px] px-[32px] font-bold" type="submit">
          Save & Next
        </button>
      </div>
    )}
  </>
  );
}
