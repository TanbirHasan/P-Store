import React, { useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Divider, Upload } from "antd";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EditVideo = ({ setShowEditVideo, selectedVideo }) => {

  const [videoStandard,setVideoStandard] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [fileList, setFileList] = useState([]);
  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        // console.log(file, fileList);
        setFileList(fileList);
      }
    },
    multiple: true,
  };

  const handleUpdateVideo = (data) => {
    const videoData = {
      title: data.title,

      description: data.description,
      videotype: videoStandard,
      videofiles: fileList,
    };
    console.log(videoData);
    toast.success("Updated Successfully");
    setShowEditVideo(false);
  };
  return (
    <div>
      {/* Add project header part */}
      <div className="flex justify-between items-center">
        <h1 className="text-[28px] font-bold">Edit Video</h1>
        <button
          onClick={() => setShowEditVideo(false)}
          className="h-10 px-5 bg-[#FFBC0F] rounded-[3px] font-semibold"
        >
          Back
        </button>
      </div>
      <hr className="mt-8 mb-10 bg-[#D9D9D9]" />
      <form onSubmit={handleSubmit(handleUpdateVideo)}>
        {/* File upload */}

        <div className="mb-5">
          <label className="text-base font-medium leading-5">
            Title or File Name
          </label>
          <input
            type="text"
            defaultValue={selectedVideo.title}
            placeholder="Enter Title"
            {...register(
              "title"
              // { required: 'Title is required' }
            )}
            className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px] h-[60px] mt-4  ${
              errors.title && "focus:border-red-600"
            }`}
          />
          {errors.title && (
            <p className="text-red-600 text-left mt-1">
              {errors.title?.message}
            </p>
          )}
        </div>

        <div className="mb-5">
          <label className="text-base font-medium leading-5">Description</label>
          <textarea
            rows="4"
            defaultValue={selectedVideo.description}
            placeholder="Enter Description"
            {...register(
              "description"
              // { required: 'Description is required' }
            )}
            className={`w-full  border border-[#FFD333] focus:outline-0 focus:ring-0 focus:ring-transparent focus:border-[1.5px] focus:border-[#FFD333]  rounded-[3px]  mt-4  ${
              errors.description && "focus:border-red-600"
            }`}
          />
          {errors.description && (
            <p className="text-red-600 text-left mt-1">
              {errors.description?.message}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <input name="videotype" type="checkbox" className="mt-1 rounded-xl" value={videoStandard} onChange={(e) => setVideoStandard(e.target.checked)}/>
          <span>Standard</span>
        </div>

        <div className="mt-[46px]  mb-10">
          <div>
            <h1 className="font-medium text-left mb-4">Submit Your Files</h1>
          </div>
          <div className="mb-5">
            <Upload className="custom-upload" {...props}>
              <div className="gap-4 p-8">
                <div className="flex justify-center">
                  {/* <button
										type="button"
										className="w-[51px] h-[51px] bg-[#FFBC0F] rounded-full mb-4">
										<FileUploadOutlinedIcon style={{ fontSize: 30 }} />
									</button> */}
                </div>
                <div>
                  <p className="ant-upload-text text-[#000000b2] text-center mb-4 mt-3">
                    Portfolio video.mp4
                  </p>
                  <Divider
                    style={{ borderColor: "#FFBC0F", borderWidth: "2px" }}
                  />
                  {/* <p className="ant-upload-text text-[#000000b2] text-center mb-4 mt-3">
										----- OR -----
									</p>
									<button
										type="button"
										className="bg-[#FFBC0F] h-[35px] px-10 block mx-auto rounded-[3px] font-medium">
										Browse
									</button> */}
                </div>
              </div>
            </Upload>
          </div>
        </div>

        <div className="font-bold space-x-4 mt-10">
          <button
            type="submit"
            className="w-[120px] h-[80px] bg-[#FFBC0F] rounded-[3px]"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => setShowEditVideo(false)}
            className="w-[133px] h-[80px] bg-[#FF3C3C] rounded-[3px] text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditVideo;
