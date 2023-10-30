import Link from "next/link";

export default function About() {
  return (
    <div className="w-full justify-center items-center flex flex-col mt-16 gap-4">
      <h1 className="text-3xl font-bold">
        About <span className="text-light">Me</span>
      </h1>
      <span className=" text-xl font-medium text-[black] w-[90%] max-lg:w-[95%] max-lg:text-sm text-justify mt-4">
        HI🙋‍♂️ , I AM <span className="text-light">YASH PATEL</span> PASSIONATE
        SOFTWARE DEVELOPER FROM <span className="text-light">INDIA</span>
      </span>

      <span className="text-xl text-[gray] w-[90%] max-lg:w-[95%] max-lg:text-base text-justify">
        We (I and my teammates) specialize in crafting innovative digital
        solutions that cater to the ever-evolving tech landscape. With a passion
        for technology and an entrepreneurial spirit, I have
        consistently pushed the boundaries of what is possible. 
       
      </span>
      <span className="text-xl text-[gray] w-[90%] max-lg:w-[95%] max-lg:text-base text-justify">
      💡 What We Do:
        We create websites and digital products that not only meet your unique
        needs but also exceed your expectations. Our expertise extends to
        various tech-related areas, including web development, e-commerce,
        mobile applications, and more.  
       
      </span>
      <span className="text-xl text-[gray] w-[90%] max-lg:w-[95%] max-lg:text-base text-justify">
      💼 Our Mission: Our mission is simple yet
        ambitious: to take businesses to new heights in the online world. We
        believe in the power of technology to transform the way companies
        operate, connect with customers, and achieve their goals.
       
      </span>
      <span className="text-xl text-[gray] w-[90%] max-lg:w-[95%] max-lg:text-base text-justify">
      🌟 Why Choose
        Us: Innovation: We stay at the forefront of technology trends to provide
        you with cutting-edge solutions. Experience: My
        experience as a software developer and entrepreneur ensure top-notch
        services. Customer-Centric: Your success is our priority; we tailor
        solutions to your specific business needs. 
       
      </span>




      <ul className="text-xl font-light text-[gray] w-[90%] max-lg:w-[95%] max-lg:text-base text-justify list-disc pl-4 flex flex-col gap-4 max-lg:gap-2 max-lg:text-left">
        <li>🌍 I am based in India</li>
        <li>
          🖥️ See my portfolio at{" "}
          <Link
            href="https://github.com/yashpatel21102002/yashpatel21102002.git"
            className="cursor-pointer text-light underline"
            target="_blank"
          >
            Github
          </Link>
        </li>
        <li>
          ✉️ You can contact me at{" "}
          <span className="cursor-pointer text-light underline">
            niceperson2110
          </span>
        </li>
        <li>
          🚀 I am currently working on{" "}
          <span className="cursor-pointer text-light underline">
            MiddleTube
          </span>
        </li>
        <li>🧠 I am learning Docker and Kubernetes</li>
        <li>🤝 I am open to collaborating on </li>
        <li>⚡ I am eager to meet you!</li>
      </ul>
    </div>
  );
}
