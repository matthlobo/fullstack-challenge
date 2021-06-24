import React from "react";
import MenuMobile from "../MenuMobile/MenuMobile.js";
import { BsXOctagon } from "react-icons/bs";

const Page404 = () => {
  return (
    <div className="container text-center">
      <h1 className="pt-4">
        <BsXOctagon />
      </h1>
      <h1 className="p-2">
        This is the error page. Didn't you type something wrong?
      </h1>
      <MenuMobile />
    </div>
  );
};

export default Page404;
