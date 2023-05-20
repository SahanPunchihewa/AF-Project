import React, { useContext, useState } from "react";
import PendingComplaints from "../customer-complaint-types/PendingComplaints";
import AssignedComplaints from "../customer-complaint-types/AssignedComplaint";
import InProgressComplaints from "../customer-complaint-types/InProgressComplaints";
import ResolvedComplaints from "../customer-complaint-types/ResolvedComplaints";
import InvalidComplaints from "../customer-complaint-types/InvalidComplaints";
import axios from "axios";
import ComplaintContext from "../../contexts/ComplaintContext";
import CustomerContext from "../../contexts/CustomerContext";
import { Link,useNavigate } from "react-router-dom";
import {MdPendingActions} from "react-icons/md"
import {TiTick} from "react-icons/ti"


const CustomerDashboard = () => {

    const[type,setType]=useState("pending");
	const { customers } = useContext(CustomerContext);

const name=localStorage.getItem("name");
const status=localStorage.getItem("accountStatus")

    return ( 
    <>
    <div className="px-16 bg-gray-100 py-10 ">
      <div>
      { status==="pending" ? (
        <div className="space-x-8 justify-right mt-32 md:mt-0 md:justify-center ml-[1250px]">
        <div className="flex bg-amber-100 h-10 w-36 rounded border-2 border-amber-500 shadow-lg">
        <div className="font-semibold text-amber-700 py-1 ml-5 text-lg">Pending</div>
        <MdPendingActions className="fill-amber-700 w-8 h-6 ml-2 mt-[6px]"/>
        </div>
      </div>
      ): status==="active" ?(
        <div className="space-x-8 justify-right mt-32 md:mt-0 md:justify-center ml-[1250px]">
        <div className="flex bg-green-100 h-10 w-36 rounded border-2 border-green-500 shadow-lg">
        <div className="font-semibold text-green-700 py-1 ml-5 text-lg">Active</div>
        <TiTick className="fill-green-700 w-8 h-6 ml-2 mt-[6px]"/>
        </div>
      </div>
      ): status==='block' ?(
        <div className="space-x-8 justify-right mt-32 md:mt-0 md:justify-center ml-[1250px]">
        <div className="flex bg-red-100 h-10 w-36 rounded border-2 border-red-500 shadow-lg">
        <div className="font-semibold text-red-700 py-1 ml-5 text-lg">Blocked</div>
        <MdPendingActions className="fill-red-700 w-8 h-6 ml-2 mt-[6px]"/>
        </div>
      </div>
      ):(<></>)
      }
      </div>
      
  <div className="p-8 bg-white shadow mt-24">
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
      </div>
      <div className="relative">
        <div className="border border-gray-500 w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {" "}
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
    <div className="mt-28 text-center border-b pb-12">
      <h1 className="text-4xl font-medium text-gray-700">
        {name}
     </h1>
      <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>
     
      <div className="flex justify-center mt-2 gap-2">
      <button className="bg-red-700 w-36 py-1 rounded text-white shadow-lg hover:bg-red-900">Edit Profile</button>
      <Link to="/complaint/add" className="bg-red-700 w-36 py-1 rounded text-white shadow-lg hover:bg-red-900">Create Complaint</Link>
      </div>
      
    </div>
    <div className="mt-12 ">
     <div className="ml-[590px] justify-center font-semibold text-lg">My Complaints</div> 
     <div className="flex gap-2 mt-6 justify-center">
     <button className={`w-24 ${type==="pending"? "bg-gray-700 border-2 border-black font-bold shadow-2xl hover:bg-gray-800":"bg-gray-500  hover:bg-gray-800"} py-1 rounded text-white shadow-lg`} onClick={()=>setType("pending")}>Pending</button>
     <button className={`w-24 ${type==="assigned"? "bg-gray-700 border-2 border-black font-bold shadow-2xl hover:bg-gray-800":"bg-gray-500  hover:bg-gray-800"} py-1 rounded text-white shadow-lg`} onClick={()=>setType("assigned")}>Assigned</button>
     <button className={`w-24 ${type==="inProgress"? "bg-gray-700 border-2 border-black font-bold shadow-2xl hover:bg-gray-800":"bg-gray-500  hover:bg-gray-800"} py-1 rounded text-white shadow-lg`} onClick={()=>setType("inProgress")}>In Progress</button>
     <button className={`w-24 ${type==="resolved"? "bg-gray-700 border-2 border-black font-bold shadow-2xl hover:bg-gray-800":"bg-gray-500  hover:bg-gray-800"} py-1 rounded text-white shadow-lg`} onClick={()=>setType("resolved")}>Resolved</button>
     <button className={`w-24 ${type==="invalid"? "bg-gray-700 border-2 border-black font-bold shadow-2xl hover:bg-gray-800":"bg-gray-500  hover:bg-gray-800"} py-1 rounded text-white shadow-lg`} onClick={()=>setType("invalid")}>Invalid</button>
     </div>
     <div>
        {type==="pending" ?(
            <PendingComplaints/>
        ): type==="assigned"? (
            <AssignedComplaints/>
        ): type==="inProgress"? (
            <InProgressComplaints/>
        ): type==="resolved"? (
            <ResolvedComplaints/>
        ): type==="invalid"? (
            <InvalidComplaints/>
        ):(<div>hello</div>)}
     </div>


    </div>
  </div>
</div>;
    </> 
    );
}
 
export default CustomerDashboard;