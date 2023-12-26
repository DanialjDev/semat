import Button from "@/components/main/Button";
import Input from "@/components/main/Input";
import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center">
      <div className="w-[400px] bg-white p-5 rounded-[4px] mt-[-150px] flex flex-col items-start">
        <p className="text-[14px] font-normal">
          جهت ورود به سامانه نام کاربری و رمز عبور را وارد کنید.
        </p>
        <form className="w-full flex flex-col">
          <div className="w-full mt-3">
            <Input
              name="username"
              placeholder="مثال : username"
              label="نام کاربری"
            />
          </div>
          <div className="w-full my-4">
            <Input
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.29005 6.9724C5.73987 5.73016 7.75465 4.79163 10 4.79163C12.2452 4.79163 14.26 5.72946 15.7099 6.97144C17.1353 8.19242 18.125 9.80862 18.125 11.25C18.125 12.6913 17.1353 14.3075 15.7099 15.5285C14.26 16.7704 12.2452 17.7083 10 17.7083C7.75465 17.7083 5.73987 16.7698 4.29005 15.5275C2.86481 14.3063 1.875 12.6902 1.875 11.25C1.875 9.80976 2.86481 8.19357 4.29005 6.9724ZM5.10336 7.92162C3.81413 9.02626 3.125 10.3267 3.125 11.25C3.125 12.1732 3.81413 13.4737 5.10336 14.5783C6.368 15.6619 8.10323 16.4583 10 16.4583C11.8969 16.4583 13.6321 15.6624 14.8967 14.5791C16.1858 13.4749 16.875 12.1744 16.875 11.25C16.875 10.3255 16.1858 9.025 14.8967 7.92077C13.6321 6.83754 11.8969 6.04163 10 6.04163C8.10323 6.04163 6.368 6.83805 5.10336 7.92162Z"
                    fill="#71737A"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.875 11.25C6.875 9.52407 8.27411 8.12496 10 8.12496C11.7259 8.12496 13.125 9.52407 13.125 11.25C13.125 12.9758 11.7259 14.375 10 14.375C8.27411 14.375 6.875 12.9758 6.875 11.25ZM10 9.37496C8.96447 9.37496 8.125 10.2144 8.125 11.25C8.125 12.2855 8.96447 13.125 10 13.125C11.0355 13.125 11.875 12.2855 11.875 11.25C11.875 10.2144 11.0355 9.37496 10 9.37496Z"
                    fill="#71737A"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.1625 4.18616C5.44307 3.98509 5.83351 4.04953 6.03459 4.33009L7.11563 5.83851C7.3167 6.11908 7.25226 6.50952 6.9717 6.7106C6.69113 6.91167 6.30068 6.84723 6.09961 6.56666L5.01857 5.05825C4.81749 4.77768 4.88194 4.38723 5.1625 4.18616Z"
                    fill="#71737A"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.2078 4.37131C15.4884 4.57239 15.5528 4.96283 15.3517 5.2434L14.2707 6.75181C14.0696 7.03237 13.6791 7.09681 13.3986 6.89573C13.118 6.69465 13.0536 6.3042 13.2547 6.02364L14.3357 4.51522C14.5368 4.23466 14.9273 4.17023 15.2078 4.37131Z"
                    fill="#71737A"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0037 2.29163C10.3488 2.29163 10.6287 2.57145 10.6287 2.91663V5.41663C10.6287 5.76181 10.3488 6.04163 10.0037 6.04163C9.65848 6.04163 9.37866 5.76181 9.37866 5.41663V2.91663C9.37866 2.57145 9.65848 2.29163 10.0037 2.29163Z"
                    fill="#71737A"
                  />
                </svg>
              }
              name="password"
              type="password"
              placeholder="*****"
              label="رمز عبور"
            />
          </div>
          <Button text="ورود به سامانه" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
