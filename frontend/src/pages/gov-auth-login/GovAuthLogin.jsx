import { useState } from "react";
import GovAuthAPI from "../../contexts/api/GovAuthAPI";
import makeToast from "../../components/toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import undraw_Login_re_4vu2 from "../../assets/undraw_Login_re_4vu2.png";

const GovAuthLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isLoading } = useMutation(GovAuthAPI.login, {
    onSuccess: (res) => {
      // Save data to local storage
      localStorage.setItem("authToken", res.data.token);
      localStorage.setItem("permissionLevel", res.data.permissionLevel);
      localStorage.setItem("uId", res.data._id);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("name", res.data.name);
      makeToast({ type: "success", message: "Login Successful" });
      window.location.href = "/gov";
    },
    onError: (error) => {
      makeToast({
        type: "error",
        message: error.response.data.details.message,
      });
    },
  });

  const login = (event) => {
    event.preventDefault();
    mutate({ email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-20 w-auto"
          src={undraw_Login_re_4vu2}
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Welcome Back
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={login}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5  text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required=""
                  placeholder="***********"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Sign in
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GovAuthLogin;
