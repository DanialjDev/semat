"use client";

import Box from "@/components/layout/Box";
import Button from "@/components/main/Button";
import { News } from "@/data/News";
import Image from "next/image";
import React, { useState } from "react";

import NewsImg from "../../../../public/assets/images/news.png";
import { useRouter } from "next/navigation";

const NewsBox = ({ item }: { item: News }) => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <div className="col-span-2" key={item.id}>
      <Box className="w-full flex flex-col">
        <Image
          src={NewsImg}
          alt="news"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "fit-content",
            objectFit: "contain",
          }}
        />
        <div className="w-full p-5 flex flex-col">
          <div className="text-gray-300">{item.category}</div>
          <div className="font-bold text-black mt-3">{item.title}</div>
          <div className="text-gray-500 my-4">{item.date}</div>
          <div className="w-full flex justify-end">
            <Button
              onClick={() => {
                setLoading(true);
                push(`/news/${item.id}`);
              }}
              loading={loading}
              text="مشاهده خبر"
              bg="bg-transparent"
              color="text-primary-400"
              width="w-fit"
              icon={
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.61293 3.1263C3.9848 1.75443 6.20296 1.70768 7.56705 3.07174L11.3754 6.88006C11.6195 7.12414 11.6195 7.51986 11.3754 7.76394C11.1313 8.00802 10.7356 8.00802 10.4915 7.76394L6.68317 3.95563C6.68317 3.95563 6.68317 3.95563 6.68317 3.95563C5.82942 3.1019 4.40301 3.10399 3.49681 4.01018C2.59062 4.91636 2.58853 6.34281 3.44225 7.19651L6.74864 10.5029C6.99271 10.747 6.99271 11.1427 6.74864 11.3868C6.50456 11.6309 6.10883 11.6309 5.86475 11.3868L2.55838 8.08041C2.55838 8.08041 2.55838 8.08041 2.55838 8.08041C1.1943 6.71636 1.24107 4.49814 2.61293 3.1263Z"
                    fill="#0086BA"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.2677 9.64284C13.5118 9.39876 13.9075 9.39876 14.1516 9.64284L17.458 12.9492C17.458 12.9492 17.458 12.9492 17.458 12.9492C18.8221 14.3133 18.7753 16.5314 17.4035 17.9033C16.0316 19.2752 13.8134 19.3219 12.4494 17.9579L8.64099 14.1495C8.39691 13.9054 8.39691 13.5097 8.64099 13.2656C8.88506 13.0216 9.28079 13.0216 9.52487 13.2656L13.3332 17.074C14.1869 17.9277 15.6134 17.9256 16.5196 17.0194C17.4258 16.1132 17.4279 14.6868 16.5741 13.8331L13.2677 10.5267C13.0237 10.2826 13.0237 9.88691 13.2677 9.64284Z"
                    fill="#0086BA"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4916 6.88018C10.7357 6.6361 11.1313 6.63598 11.3754 6.88006C12.7395 8.24415 12.6928 10.4624 11.3209 11.8343C11.0769 12.0784 10.6811 12.0784 10.4371 11.8343C10.193 11.5903 10.193 11.1945 10.437 10.9504C11.3432 10.0442 11.3452 8.61768 10.4915 7.76394C10.2474 7.51987 10.2475 7.12426 10.4916 6.88018Z"
                    fill="#0086BA"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.52463 9.14071C9.76871 9.38479 9.76872 9.78051 9.52464 10.0246C8.61846 10.9308 8.61636 12.3572 9.47009 13.211C9.71417 13.455 9.71417 13.8508 9.47009 14.0949C9.22602 14.3389 8.83029 14.3389 8.58621 14.0949C7.22212 12.7308 7.26893 10.5126 8.64074 9.14073C8.88482 8.89665 9.28055 8.89664 9.52463 9.14071Z"
                    fill="#0086BA"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default NewsBox;
