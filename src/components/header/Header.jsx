import ScienceLabIcon from "@/assets/images/ai-science-lab.svg";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <header className="flex justify-between lg:flex-row flex-col items-center pt-[37px] px-11 font-lufga">
      <nav className="flex items-center md:flex-nowrap flex-wrap justify-center">
        <div className="flex items-center justify-center border border-white p-2.5 bg-white/10 rounded-full">
          <img src={ScienceLabIcon.src} alt="Science Lab icon" />
        </div>
        <button className="px-12 py-3.5 capitalize flex items-center justify-center focus:bg-white bg-transparent focus:text-black text-white border border-white/70 text-lg rounded-4xl font-medium hover:bg-white hover:text-black transition-all duration-300">
          Home
        </button>
        <button className="px-12 py-3.5 capitalize flex items-center justify-center focus:bg-white bg-transparent focus:text-black text-white border border-white/70 text-lg rounded-4xl font-medium hover:bg-white hover:text-black transition-all duration-300">
          contact
        </button>
        <button className="px-12 py-3.5 capitalize flex items-center justify-center focus:bg-white bg-transparent focus:text-black text-white border border-white/70 text-lg rounded-4xl font-medium hover:bg-white hover:text-black transition-all duration-300">
          blog
        </button>
      </nav>
      <nav className="flex items-center md:flex-nowrap flex-wrap justify-center">
        <div className="flex items-center justify-center border border-white p-3 rounded-full">
          <IoSearch size={20} className="text-white" />
        </div>
        <button className="px-12 py-3.5 capitalize flex items-center justify-center focus:bg-white bg-transparent focus:text-black text-white border border-white/70 text-lg rounded-4xl font-medium hover:bg-white hover:text-black transition-all duration-300">
          Shop
        </button>
        <button className="px-12 py-3.5 capitalize flex items-center justify-center focus:bg-white bg-transparent focus:text-black text-white border border-white/70 text-lg rounded-4xl font-medium hover:bg-white hover:text-black transition-all duration-300">
          Log in
        </button>
      </nav>
    </header>
  );
}

// ==> The working version
// "use client";
// import ScienceLabIcon from "@/assets/images/ai-science-lab.svg";
// import { IoSearch } from "react-icons/io5";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const pathname = usePathname();

//   const linkClasses = (path) =>
//     `px-12 py-3.5 capitalize flex items-center justify-center text-lg rounded-4xl font-medium border border-white/70 transition-all duration-300
//      ${
//        pathname === path
//          ? "bg-white text-black" // active page
//          : "bg-transparent text-white hover:bg-white hover:text-black"
//      }`;

//   return (
//     <header className="flex justify-between lg:flex-row flex-col items-center pt-[37px] px-11 font-lufga">
//       <nav className="flex items-center md:flex-nowrap flex-wrap justify-center">
//         <div className="flex items-center justify-center border border-white p-2.5 bg-white/10 rounded-full">
//           <img src={ScienceLabIcon.src} alt="Science Lab icon" />
//         </div>
//         <button className={linkClasses("/")}>Home</button>
//         <button className={linkClasses("/contact")}>Contact</button>
//         <button className={linkClasses("/blog")}>Blog</button>
//       </nav>

//       <nav className="flex items-center md:flex-nowrap flex-wrap justify-center">
//         <div className="flex items-center justify-center border border-white p-3 rounded-full">
//           <IoSearch size={20} className="text-white" />
//         </div>
//         <button className={linkClasses("/shop")}>Shop</button>
//         <button className={linkClasses("/login")}>Log in</button>
//       </nav>
//     </header>
//   );
// }
