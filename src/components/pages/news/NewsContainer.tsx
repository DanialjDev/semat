"use client";

import Section from "@/components/layout/Section";
import Button from "@/components/main/Button";
import Input from "@/components/main/Input";
import { News, homePageNews } from "@/data/News";
import React, { useState } from "react";
import NewsBox from "./NewsBox";

const NewsContainer = ({ news }: { news: News[] }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Section
        hasExtraForTitle
        centerTitle={false}
        title={
          <div className="w-full flex items-center">
            <div className="relative w-full flex items-center">
              <span className="bg-white z-20 text-[17px] font-bold text-primary-400 mr-10">
                آرشیو صفحه اخبار
              </span>
              <div className="w-full absolute border border-dashed border-gray-cb bottom-[50%] z-10" />
            </div>
            <div className="flex items-center">
              <div className="w-[240px] mx-2">
                <Input
                  setValue={setSearchValue}
                  value={searchValue}
                  name="search_post"
                  placeholder="متن مورد جستجو ..."
                  type="text"
                />
              </div>
              <Button
                text="جستجو"
                bg="bg-transparent"
                color="text-gray-700"
                border="border border-gray-700"
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.0415 8.74996C1.0415 4.49278 4.49266 1.04163 8.74984 1.04163C13.007 1.04163 16.4582 4.49278 16.4582 8.74996C16.4582 13.0071 13.007 16.4583 8.74984 16.4583C4.49266 16.4583 1.0415 13.0071 1.0415 8.74996ZM8.74984 2.29163C5.18302 2.29163 2.2915 5.18314 2.2915 8.74996C2.2915 12.3168 5.18302 15.2083 8.74984 15.2083C12.3167 15.2083 15.2082 12.3168 15.2082 8.74996C15.2082 5.18314 12.3167 2.29163 8.74984 2.29163Z"
                      fill="#0C0C0C"
                    />
                    <path
                      d="M5.95087 5.53429C6.66653 4.81868 7.65696 4.37496 8.74984 4.37496C9.84271 4.37496 10.8331 4.81868 11.5488 5.53431C11.7929 5.77839 11.7929 6.17412 11.5488 6.41819C11.3047 6.66227 10.909 6.66227 10.6649 6.41819C10.1741 5.92741 9.49788 5.62496 8.74984 5.62496C8.00179 5.62496 7.32556 5.9274 6.83472 6.41821C6.59064 6.66228 6.19491 6.66226 5.95084 6.41818C5.70677 6.17409 5.70678 5.77836 5.95087 5.53429Z"
                      fill="#0C0C0C"
                    />
                    <path
                      d="M13.4003 13.4004C13.6444 13.1564 14.0401 13.1564 14.2842 13.4004L17.8197 16.936C18.0638 17.1801 18.0638 17.5758 17.8197 17.8199C17.5757 18.0639 17.1799 18.0639 16.9359 17.8199L13.4003 14.2843C13.1562 14.0402 13.1562 13.6445 13.4003 13.4004Z"
                      fill="#0C0C0C"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        }
      >
        <div className="w-full grid grid-cols-12 gap-6 my-6">
          {homePageNews.map((item) => (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
              key={item.id}
            >
              <NewsBox item={item} />
            </div>
          ))}
        </div>
      </Section>
      <div className="w-full flex justify-end items-center my-4">
        <div className="ml-3 cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.05806 15.0253C6.81398 14.7812 6.81398 14.3854 7.05806 14.1414L11.6161 9.58331L7.05806 5.02525C6.81398 4.78118 6.81398 4.38545 7.05806 4.14137C7.30214 3.89729 7.69786 3.89729 7.94194 4.14137L12.9419 9.14137C13.186 9.38545 13.186 9.78118 12.9419 10.0253L7.94194 15.0253C7.69786 15.2693 7.30214 15.2693 7.05806 15.0253Z"
              fill="#71737A"
            />
          </svg>
        </div>
        <div className="flex flex-row-reverse gap-x-2 items-center">
          <div className="border border-primary-base rounded-[4px] w-[40px] h-[40px] cursor-pointer text-primary-base flex justify-center items-center">
            1
          </div>
          <div className="border border-gray-100 rounded-[4px] w-[40px] h-[40px] cursor-pointer text-black flex justify-center items-center">
            2
          </div>
          <div className="border border-gray-100 rounded-[4px] w-[40px] h-[40px] cursor-pointer text-black flex justify-center items-center">
            3
          </div>
          <div className="border border-gray-100 rounded-[4px] w-[40px] h-[40px] cursor-pointer text-black flex justify-center items-center">
            4
          </div>
          <div className="border border-gray-100 rounded-[4px] w-[40px] h-[40px] cursor-pointer text-black flex justify-center items-center">
            5
          </div>
          <div className="border border-gray-100 rounded-[4px] w-[40px] h-[40px] cursor-pointer text-black flex justify-center items-center">
            6
          </div>
        </div>
        <div className="mr-3 cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9419 4.97475C13.186 5.21882 13.186 5.61455 12.9419 5.85863L8.38388 10.4167L12.9419 14.9747C13.186 15.2188 13.186 15.6146 12.9419 15.8586C12.6979 16.1027 12.3021 16.1027 12.0581 15.8586L7.05806 10.8586C6.81398 10.6146 6.81398 10.2188 7.05806 9.97475L12.0581 4.97475C12.3021 4.73067 12.6979 4.73067 12.9419 4.97475Z"
              fill="#71737A"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default NewsContainer;
