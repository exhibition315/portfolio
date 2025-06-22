"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-32 h-32 relative">
      <Image
        src="/avatar.jpg"
        alt="Alvin"
        fill
        sizes="128px"
        className="rounded-full object-cover object-[center_top] border-4 border-white shadow-lg"
        priority
        draggable={false}
      />
    </div>
  );
};

export default Avatar;
