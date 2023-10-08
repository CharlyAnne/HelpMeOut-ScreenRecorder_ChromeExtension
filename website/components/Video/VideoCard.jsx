import Link from 'next/link';
import React from 'react';
import { FiLink2 } from 'react-icons/fi';
import { SlOptionsVertical } from 'react-icons/sl';

const VideoCard = ({ video, url, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Link href={`/home/Recent Videos/${id}`}>
        <video
          controls
          autoPlay
          muted
          className="w-full h-auto mb-4 rounded-xl"
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <section className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-[#141414]">
              {video.title}
            </h3>
            <p className="text-[#B6B3C6] text-base ">{video.date}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <FiLink2 className="text-[#141414CC] text-xl" />
              <SlOptionsVertical className="text-[#141414CC] text-xl" />
            </div>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default VideoCard;
