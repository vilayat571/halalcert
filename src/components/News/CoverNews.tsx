import Anchor from "../Navbar/Anchor";

const CoverNews = () => {
  return (
    <>
      <img
        className="w-full object-CoverNews xl:h-[600px] lg:h-[600px] md:h-screen sm:h-[500px]"
        src="https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fcaptureatrip-new-website.s3.ap-south-1.amazonaws.com%2Fimages%2Ftrip%2Faf2f8bc2-682e-4fd0-8b91-eae6ca8610f8.webp&w=3840&q=80"
        alt="the image of Azercett website"
      />
      <div className="w-full  bg-black opacity-70 absolute top-100 xl:h-[600px] lg:h-[600px] md:h-screen sm:h-[500px]"></div>
      <div className="w-full  flex items-center justify-center absolute top-100 xl:h-[600px] lg:h-[600px] md:h-screen sm:h-[500px]">
        <div className="flex flex-col items-center">
        <p className="text-center text-white 
          xl:text-5xl lg:text-4xl md:text-2xl sm:text-3xl mb-2  
          leading-[120px]
           sm:my-1 xl:my-4 lg:my-4 md:my-3 ">
          AzeSERT Halal 
          <br />
        Bütün Xəbərlər
          </p>
          <Anchor
            href="https://wa.me/994553430353"
            style="px-2 text-center rounded py-4 text-sm 
    bg-[#29a829] text-white  w-32 sm:mt-2 md:mt-0 lg:mt-0 xl:mt-0"
            target={true}
            label="Phone number: +994553430353"
            text="Ətraflı"
          />
        </div>
      </div>
    </>
  );
};

export default CoverNews;
