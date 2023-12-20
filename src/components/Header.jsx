import React from "react";
import { Link } from "react-router-dom";
import Cross from "../assets/cross.svg";
const Header = () => {
  return (
    <section>
      <div className="Container text-white">
        <h1 className="text-[9.2rem] leading-[6.8rem] my-4 mb-10 font-extrabold font-bowby text-yellow-400 text-center tracking-[-0.09em] ">
          <span className="text-white ">Bi</span>ble Quest{" "}
          <span className="text-white">B</span>ingo Chal
          <span className="text-white">le</span>ng
          <span className="ml-2 transform -rotate-12 inline-block scale-125 font-semibold">
            e
          </span>
        </h1>
        <nav>
          <ul className=" flex font-bowby text-2xl font-bold tracking-widest justify-between">
            <Link to="/game" className="hover:scale-125 hover:border-b">
              <li>Game</li>
            </Link>
            <Link to="/rules" className="hover:scale-125 hover:border-b">
              <li>Rules</li>
            </Link>
            <Link to="/questions" className="hover:scale-125 hover:border-b">
              <li>Questions</li>
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
