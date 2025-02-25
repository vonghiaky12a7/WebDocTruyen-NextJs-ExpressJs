"use client";

const Banner = () => {
  return (
    <section
      className="bg-cover bg-center h-40 flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-3xl font-bold">Chào mừng đến với TruyenChu</h2>
        <p className="mt-2">
          Đọc truyện miễn phí với hàng ngàn đầu truyện hay nhất!
        </p>
      </div>
    </section>
  );
};

export default Banner;
