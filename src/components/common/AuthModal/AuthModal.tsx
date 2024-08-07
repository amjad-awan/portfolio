import { useAuth } from "@/context/authContext";
import React from "react";

const AuthModal = () => {
  const { login, user, logout,setShowModal, showModal } = useAuth();

  return (
    <>
      {" "}
      <div onClick={()=>setShowModal(false)} className={`inset-0 top-[80px] fixed ${showModal?"z-[12]":"-z-[12]"} bg-[#000000b9]`}> </div>
      <div
        className={` z-[999999] overflow-hidden rounded-md w-[300px] transition-all duration-500 fixed  ${
          showModal?"top-[50%]":"top-[-80px]" 
        }   left-[50%] translate-x-[-50%] translate-y-[-50%]`}
      >
        <div className="p-[10px] font-primary text-[var(--body-bg)] text-center text-[18px] font-[600] bg-[var(--color-primary)]">
          {user ? "Logout" : "Login"}
        </div>
        <div className=" w-[100%]  bg-[var(--body-bg)] py-[20px] px-[10px]">
          {user ? (
            <button
              onClick={logout}
              className=" text-[#fff] text-center w-[100%] flex justify-center gap-[20px] rounded-md items-center py-[10px] px-[10px] bg-[var(--gray4-color)]"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={login}
              className=" text-[#fff] w-[100%] flex gap-[20px] rounded-md items-center py-[10px] px-[10px] bg-[var(--gray4-color)]"
            >
              <svg
                width="20"
                viewBox="0 0 366 372"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                  id="Shape"
                  fill="#EA4335"
                ></path>
                <path
                  d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
                  id="Shape"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
                  id="Shape"
                  fill="#4285F4"
                ></path>
                <path
                  d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
                  fill="#34A853"
                ></path>
              </svg>
              continue with google
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthModal;
