import { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import NavbarDashboard from '../components/NavbarDashboard'
import Sidebar from '../components/Sidebar'
import { BiKey } from "react-icons/bi";

function ChangePass() {
   useState(0)
  return (
    <>
    <div className='w-full flex flex-col box-border h-fit-content'>
     <NavbarDashboard page={"Change Password"}/>
     <div className='flex box-border'>
        <Sidebar page={"profile"} side={"sidebar"}/>
        <section className="flex flex-col gap-8 w-full h-[433px] p-4 md:p-8">
          <div className='flex gap-2 text-secondary font-bold text-base'><CgProfile className='text-[#2948FF] w-4 h-4'/> Profile</div>
            <form className='md:px-9 md:py-4 flex flex-col gap-4 w-full h-[746px] md:border-2 md:border-abuMuda'>
                <div className='text-secondary font-semibold text-base'>Change Password</div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-0.5'>
                    <div className='text-secondary font-semibold text-base'>Existing Password</div>
                  </div>
                  <div className='flex'>
                    <div className=''>
                        <BiKey className=' ml-5 mt-3 absolute w-4 h-4'/>
                    </div>
                    <input type="text" placeholder="Type here" className="focus:outline-none py-5 px-14 border-2 border-abuMuda w-full h-11 rounded-md" />
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-0.5'>
                    <div className='text-secondary font-semibold text-base'>New Password</div>
                  </div>
                  <div className='flex'>
                    <div className=''>
                        <BiKey className=' ml-5 mt-3 absolute w-4 h-4'/>
                    </div>
                    <input type="text" placeholder="Type here" className="focus:outline-none py-5 px-14 border-2 border-abuMuda w-full h-11 rounded-md" />
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-0.5'>
                    <div className='text-secondary font-semibold text-base'>Confirm New Password</div>
                  </div>
                  <div className='flex'>
                    <div className=''>
                        <BiKey className=' ml-5 mt-3 absolute w-4 h-4'/>
                    </div>
                    <input type="text" placeholder="Type here" className="focus:outline-none py-5 px-14 border-2 border-abuMuda w-full h-11 rounded-md" />
                  </div>
                </div>
                <div>
                    <button className='bg-[#2948FF] w-full h-11 text-white rounded-md'>Submit</button>
                </div>
            </form>
        </section>
     </div>
   </div>
   </>
  )
}

export default ChangePass
