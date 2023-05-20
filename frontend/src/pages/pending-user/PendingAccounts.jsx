import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CustomerContext from "../../contexts/CustomerContext";
import CustomerAPI from "../../contexts/api/CustomerAPI";
import makeToast from "../../components/toast";
import { FaUser } from "react-icons/fa";

const status = "active";

// Change account status
const changeAccountStatus = async (customerId, status) => {
  try {
    const { data } = await CustomerAPI.changeAccountStatus(customerId, status);
    makeToast({ type: "success", message: "Account status updated successfully" });
  } catch (error) {
    console.log(error);
    makeToast({ type: "error", message: "Something went wrong" });
  }
  window.location.reload(true);
};

const PendingAccount = () => {
  const { customers, deleteCustomer } = useContext(CustomerContext);
  const [popupImage, setPopupImage] = useState(null);

  const handleImageClick = (image) => {
    setPopupImage(image);
  };

  const closePopupImage = () => {
    setPopupImage(null);
  };

  return (
    <div className="p-3">
      <h1 className="text-xl font-bold mb-4">Pending Accounts</h1>
      <div className="flex ">
        <div className="border-t border-white/5 p-4">
          <Link to="/admin">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
              Back to Dashboard
            </button>
          </Link>
        </div>
        <div className="border-t border-white/5 p-4">
          <Link to="/admin/userManage">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
              Manage Users
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-md rounded my-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-center">Customer Name</th>
              <th className="py-3 px-6 text-center">NIC</th>
              <th className="py-3 px-6 text-center">Front Image</th>
              <th className="py-3 px-6 text-center">Back Image</th>
              <th className="py-3 px-6 text-center">Account Status</th>
              <th className="py-3 px-6 text-center">Change Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {customers
              .filter((elem) => elem.accountStatus === "pending")
              .map((customer) => (
                <tr
                  key={customer._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap text-lg font-bold">
                    <FaUser className="inline-block mr-2 text-gray-500" />
                    <Link to={`/customer/${customer._id}`}>{customer.name}</Link>
                  </td>
                  <td className="py-3 px-6 text-center text-lg font-bold">{customer.nic}</td>
                  <td>
                    <div className="relative">
                      <img
                        className="h-36 w-36 rounded-lg object-cover object-center cursor-pointer"
                        src={customer.imageFront}
                        alt=""
                        onClick={() => handleImageClick(customer.imageFront)}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="relative">
                      <img
                        className="h-36 w-36 rounded-lg object-cover object-center cursor-pointer"
                        src={customer.imageBack}
                        alt=""
                        onClick={() => handleImageClick(customer.imageBack)}
                      />
                    </div>
                  </td>
                  <td>
                    <span className="ml-[5rem] inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-lg font-bold text-green-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                      {customer.accountStatus}
                    </span>
                  </td>
                  <td>
                    <button
                      className="bg-green-500 text-white py-2 px-2 ml-[5rem] rounded-md text-lg font-bold hover:bg-green-600 transition-colors"
                      onClick={() => changeAccountStatus(customer._id, status)}
                    >
                      Active Account
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {popupImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 text-gray-500"
              onClick={closePopupImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              className="max-w-screen-lg max-h-screen-80 rounded-lg object-contain"
              src={popupImage}
              alt="Popup Image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingAccount;
