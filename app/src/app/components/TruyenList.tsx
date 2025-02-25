"use client";

import Image from "next/image";

const truyenData = [
  {
    id: 1,
    title: "One Piece",
    cover:
      "https://i.pinimg.com/736x/3e/f4/eb/3ef4eb6d208d754a577bc9f37a178b0a.jpg",
    genre: "Phiêu lưu, Hành động",
  },
  {
    id: 2,
    title: "Naruto",
    cover:
      "https://i.pinimg.com/736x/64/5f/2b/645f2b73128182f6754fc19fbf1034d6.jpg",
    genre: "Hành động, Võ thuật",
  },
  {
    id: 3,
    title: "Attack on Titan",
    cover:
      "https://i.pinimg.com/736x/13/e4/f9/13e4f9058fbd616f5921cd7322175d68.jpg",
    genre: "Kịch tính, Hành động",
  },
  {
    id: 4,
    title: "Doraemon",
    cover:
      "https://i.pinimg.com/736x/85/d0/45/85d045fd8781b8ab2aea2a3ecb275e8b.jpg",
    genre: "Hài hước, Đời thường",
  },
];

const TruyenList = () => {
  return (
    <section className="container mx-auto my-10 px-6">
      <h2 className="text-2xl font-bold mb-4">Truyện Mới Cập Nhật</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {truyenData.map((truyen) => (
          <div
            key={truyen.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={truyen.cover}
              alt={truyen.title}
              width={200}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold">{truyen.title}</h3>
              <p className="text-sm text-gray-600">{truyen.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TruyenList;
