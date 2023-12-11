import React from "react";
import { Link } from "react-router-dom";
import Anh1 from "../../access/img/blog-img1.png";
import Anh2 from "../../access/img/blog-img2.png";
import Anh3 from "../../access/img/about-img.png";
// import Anh4 from "../../access/img/";
export default function Blog() {
  return (
    <div className="pb-8 px-[10px] md:pb-16 border-b md:px-3 lg:px-0 md:max-w-[1180px] md:mx-auto">
      <div className="mt-10">
        <h1 className=" text-[29px] uppercase font-semibold mb-5 text-center">
          Blog
        </h1>
        <div className="mb-3 md:h-[300px] grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
          <BlogTagItems />
        </div>
        <div className="mb-10 md:h-[200px] grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5">
          <BlogTagItem />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5">
          <BlogHomeItem />
        </div>
      </div>
    </div>
  );
}
const BlogTagItems = () => {
  const BlogTag = [
    {
      slug: "loai-ca-phe-thuong-hang",
      name: "LOẠI CÀ PHÊ THƯỢNG HANG NHẤT CHÂU Á",
      image: Anh1,
    },
    {
      slug: "ca-phe-giup-tinh-than-sang-khoai",
      name: "CÀ PHÊ GIÚP TINH THẦN SẢNG KHOÁI",
      image: Anh2,
    },
  ];
  return (
    <>
      {BlogTag.map((item) => (
        <Link
          key={item.slug}
          to={`/blog/${item.slug}`}
          className="h-full relative group overflow-hidden"
        >
          <img
            className="group-hover:scale-110 duration-500  transition-all w-full h-full object-cover"
            src={item.image}
            alt="Img"
          />
          <div className="absolute top-0 left-0 w-full h-full duration-500 bg-gradient-to-b from-transparent transition-all group-hover:to-[rgba(0,0,0,0.69)] to-[rgba(0,0,0,0.59)]"></div>
          <div className="absolute bottom-6 left-6">
            <h3 className="text-white font-semibold text-[20px]">
              {item.name}
            </h3>
          </div>
          {/* <div className="absolute top-3 left-3 flex gap-x-3 flex-wrap gap-y-2">
            <div className="uppercase bg-black text-white px-2 py-1 text-xs font-semibold">
              All
            </div>
            <div className="uppercase bg-black text-white px-2 py-1 text-xs font-semibold">
              Best of beauty
            </div>
            <div className="uppercase bg-black text-white px-2 py-1 text-xs font-semibold">
              Skin
            </div>
            <div className="uppercase bg-black text-white px-2 py-1 text-xs font-semibold">
              Tips
            </div>
          </div> */}
        </Link>
      ))}
    </>
  );
};
const BlogTagItem = () => {
  const BlogTag = [
    {
      slug: "loai-ca-phe-thuong-hang",
      name: "LOẠI CÀ PHÊ THƯỢNG HANG NHẤT CHÂU Á",
      image: Anh1,
    },
    {
      slug: "ca-phe-giup-tinh-than-sang-khoai",
      name: "CÀ PHÊ GIÚP TINH THẦN SẢNG KHOÁI",
      image: Anh2,
    },
    {
      slug: "uong-ca-phe-giup-lam-viec-nang-dong",
      name: "UỐNG CÀ PHÊ GIÚP LÀM VIỆC NĂNG ĐỘNG",
      image: Anh3,
    },
  ];
  return (
    <>
      {BlogTag.map((item) => (
        <Link
          key={item.slug}
          to={`/blog/${item.slug}`}
          className="h-full relative group overflow-hidden"
        >
          <img
            className="group-hover:scale-110 duration-500  transition-all w-full h-full object-cover"
            src={item.image}
            alt="Img"
          />
          <div className="absolute top-0 left-0 w-full h-full duration-500 bg-gradient-to-b from-transparent transition-all group-hover:to-[rgba(0,0,0,0.69)] to-[rgba(0,0,0,0.59)]"></div>
          <div className="absolute bottom-6 left-6">
            <h3 className="text-white font-semibold text-[20px]">
              {item.name}
            </h3>
          </div>
          {/* <div className="absolute top-3 left-3 flex gap-x-3 flex-wrap gap-y-2">
            <div className="uppercase bg-black text-white px-2 py-1 text-xs font-semibold">
              All
            </div>
            <div className="uppercase bg-black text-white px-2 py-1 text-xs font-semibold">
              Best of beauty
            </div>
            <div className="uppercase bg-black text-white px-2 py-1 text-xs font-semibold">
              Skin
            </div>
            <div className="uppercase bg-black text-white px-2 py-1 text-xs font-semibold">
              Tips
            </div>
          </div> */}
        </Link>
      ))}
    </>
  );
};
const BlogHomeItem = () => {
  const datafaces = [
    {
      slug: "loai-ca-phe-thuong-hang",
      name: "LOẠI CÀ PHÊ THƯỢNG HANG NHẤT CHÂU Á",
      image: Anh1,
    },
    {
      slug: "ca-phe-giup-tinh-than-sang-khoai",
      name: "CÀ PHÊ GIÚP TINH THẦN SẢNG KHOÁI",
      image: Anh2,
    },
    {
      slug: "uong-ca-phe-giup-lam-viec-nang-dong",
      name: "UỐNG CÀ PHÊ GIÚP LÀM VIỆC NĂNG ĐỘNG",
      image: Anh3,
    },
  ];
  return (
    <>
      {datafaces.map((item) => (
        <Link key={item.slug} to={`/blog/${item.slug}`}>
          <div className="rounded-xl overflow-hidden h-[255px]">
            <img
              className="w-full h-full object-cover"
              src={item.image}
              alt="anh"
            />
          </div>
          <h4 className="uppercase text-sm font-semibold text-center pt-3">
            {item.name}
          </h4>
        </Link>
      ))}
    </>
  );
};
