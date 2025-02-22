import React from "react";
import logo from "../assets/icons/ppay_logo2.png";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";

function ForgotPassword() {
  return (
    <div>
      <div>
        <div className="flex h-screen bg-primary justify-center items-center py-52 md:py-0 px-5 md:px-0">
          <div className="py-16 px-12 w-[800px] bg-neutral rounded-3xl flex flex-col gap-5">
            <div className="items-center">
              <img src={logo} alt="" className="w-32 h-10" />
            </div>
            <div className="md:text-3xl text-lg font-medium">Fill Out Form Correctly 👋</div>
            <div className="text-xs md:text-base">
            We will send new password to your email
            </div>
            <form className="w-full flex flex-col gap-5">
            <label htmlFor="" className="flex flex-col gap-1">
              <div>
                <span className="text-base font-medium">Email</span>
              </div>
              <div className="input border-info w-full h-11 pl-5 flex items-center gap-3">
              <MdOutlineMail className="text-info"/>
                <input type="text" placeholder="Enter Your Email" className="w-full box-border"/>
              </div>
            </label>
              <button className="btn btn-primary text-neutral"><Link to="/pinLogin">Submit</Link></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
