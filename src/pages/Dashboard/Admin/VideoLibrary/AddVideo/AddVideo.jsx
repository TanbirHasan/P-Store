import React, { useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Upload } from "antd";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddVideo = ({ setShowAddVideo }) => {
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

  const handleAddVideo = (data) => {
    const videoData = {
      title: data.title,
      description: data.description,
      standardVideo: data.standardVideo,
      projectFiles: fileList,
    };
    console.log(videoData);
    toast.success("video Added");
    setShowAddVideo(false);
  };

  return (
    <div>
      {/* Add project header part */}
      <div className="flex justify-between items-center">
        <h1 className="text-[28px] font-bold">Add Video</h1>
        <button
          onClick={() => setShowAddVideo(false)}
          className="h-10 px-5 bg-[#FFBC0F] rounded-[3px] font-semibold"
        >
          Back
        </button>
      </div>
      <hr className="mt-8 mb-10 bg-[#D9D9D9]" />
      <form onSubmit={handleSubmit(handleAddVideo)}>
        <div className="mb-5">
          <label className="text-base font-medium leading-5">
            Title or File Name
          </label>
          <input
            type="text"
            placeholder="Enter Title or File Name"
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

        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="rounded-xl border-amber-400"
            name="standardVideo"
            id="standardVideo"
            {...register("standardVideo")}
          />
          <label htmlFor="standardVideo">Standard</label>
        </div>

        {/* File upload */}
        <div className="mt-[46px]  mb-10">
          <div>
            <h1 className="font-medium text-left mb-4">Submit Your Files</h1>
          </div>
          <div className="mb-5">
            <Upload className="custom-upload" {...props}>
              <div className="gap-4 p-8">
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="w-[51px] h-[51px] bg-[#FFBC0F] rounded-full mb-4"
                  >
                    <FileUploadOutlinedIcon style={{ fontSize: 30 }} />
                  </button>
                </div>
                <div>
                  <p className="ant-upload-text text-[#000000b2] text-center mb-4 mt-3">
                    Drag & Drop Or select a file
                  </p>
                  <p className="ant-upload-text text-[#000000b2] text-center mb-4 mt-3">
                    ----- OR -----
                  </p>
                  <button
                    type="button"
                    className="bg-[#FFBC0F] h-[35px] px-10 block mx-auto rounded-[3px] font-medium"
                  >
                    Browse
                  </button>
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
            Save
          </button>
          <button
            type="button"
            onClick={() => setShowAddVideo(false)}
            className="w-[133px] h-[80px] bg-[#FF3C3C] rounded-[3px] text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVideo;
