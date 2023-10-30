import Image from "next/image";
import Okay from "../../public/okay.png";
import Link from "next/link";
export default function Profile() {
  return (
    <div
      className={`flex w-full pt-16 max-lg:pt-5 justify-between items-start text-[black] max-md:px-2 h-auto`}
    >
      <div className="flex justify-around gap-10 items-center w-full h-full max-lg:flex-col max-lg:justify-center">
        <div className="flex flex-col gap-3 justify-center h-full basis-1/2 max-lg:order-2">
          <h1 className="text-5xl max-lg:text-3xl font-bold">
            Coding the Future, Building Businesses Today
            
          </h1>
          <h3 className="text-xl max-lg:text-base text-[gray] text-justify">
            Hi👋,I am yash patel, Are you ready to transform your business and establish a strong online presence? I, a visionary software developer and entrepreneur
            from India, is here to revolutionize your journey.
          </h3>
          <div className="flex gap-3">
            <Link
              href="mailto:niceperson2110@gmail.com"
              className="bg-light text-white px-4 py-1 cursor-pointer flex justify-center items-center"
              target="_blank"
            >
              Contact Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1q7SKtgWOigrC9xq--FiUmQbPbumLjuFP/view?usp=drive_link"
              target="_blank"
              className="border-2 border-light px-4 py-1 cursor-pointer text-black flex justify-center items-center"
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center  max-lg:order-1 box-border shadow-sm shadow-[black] rounded-lg w-[300px]">
          <Image
            src={Okay}
            alt="okay"
            className="rounded-lg w-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
