import Box from "@/components/layout/Box";
import Section from "@/components/layout/Section";
import Button from "@/components/main/Button";
import Image from "next/image";
import React from "react";

import IranFlag from "../../../../public/assets/images/iran-flag.png";

const SystemLinks = () => {
  return (
    <Section title="لینک های سامانه ها">
      <div className="w-full flex flex-col mt-4">
        {[1, 2, 3, 4, 5].map(() => (
          <Box className="w-full py-8 px-16 flex flex-col items-end relative mb-3">
            <div className="absolute top-0 right-0">
              <Image src={IranFlag} alt="iran" width={60} />
            </div>
            <div className="w-full font-bold mb-3">سامانه بند ب ماده ۶۴</div>
            <div className="w-full flex justify-start">
              <Button
                width="w-fit"
                text="رفتن به سامانه"
                bg="bg-transparent"
                color="text-primary-400"
                padding="p-0"
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
                      d="M2.61293 2.62624C3.9848 1.25437 6.20296 1.20761 7.56705 2.57167L11.3754 6.38C11.6195 6.62408 11.6195 7.0198 11.3754 7.26388C11.1313 7.50796 10.7356 7.50796 10.4915 7.26388L6.68317 3.45557C6.68317 3.45556 6.68317 3.45557 6.68317 3.45557C5.82942 2.60184 4.40301 2.60393 3.49681 3.51012C2.59062 4.4163 2.58853 5.84275 3.44225 6.69645L6.74864 10.0028C6.99271 10.2469 6.99271 10.6426 6.74864 10.8867C6.50456 11.1308 6.10883 11.1308 5.86475 10.8867L2.55838 7.58035C2.55838 7.58034 2.55838 7.58035 2.55838 7.58035C1.1943 6.2163 1.24107 3.99808 2.61293 2.62624Z"
                      fill="#0086BA"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.2677 9.14278C13.5118 8.8987 13.9075 8.8987 14.1516 9.14278L17.458 12.4491C17.458 12.4491 17.458 12.4491 17.458 12.4491C18.8221 13.8132 18.7753 16.0314 17.4035 17.4032C16.0316 18.7751 13.8134 18.8219 12.4494 17.4578L8.64099 13.6495C8.39691 13.4054 8.39691 13.0096 8.64099 12.7656C8.88506 12.5215 9.28079 12.5215 9.52487 12.7656L13.3332 16.5739C14.1869 17.4276 15.6134 17.4256 16.5196 16.5194C17.4258 15.6131 17.4279 14.1867 16.5741 13.333L13.2677 10.0267C13.0237 9.78258 13.0237 9.38685 13.2677 9.14278Z"
                      fill="#0086BA"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.4916 6.38012C10.7357 6.13604 11.1313 6.13592 11.3754 6.38C12.7395 7.74409 12.6928 9.96238 11.3209 11.3342C11.0769 11.5783 10.6811 11.5783 10.4371 11.3343C10.193 11.0902 10.193 10.6945 10.437 10.4504C11.3432 9.54416 11.3452 8.11762 10.4915 7.26388C10.2474 7.01981 10.2475 6.6242 10.4916 6.38012Z"
                      fill="#0086BA"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.52463 8.64065C9.76871 8.88472 9.76872 9.28045 9.52464 9.52453C8.61846 10.4308 8.61636 11.8572 9.47009 12.7109C9.71417 12.955 9.71417 13.3507 9.47009 13.5948C9.22602 13.8389 8.83029 13.8389 8.58621 13.5948C7.22212 12.2307 7.26893 10.0125 8.64074 8.64067C8.88482 8.39659 9.28055 8.39658 9.52463 8.64065Z"
                      fill="#0086BA"
                    />
                  </svg>
                }
              />
            </div>
          </Box>
        ))}
      </div>
    </Section>
  );
};

export default SystemLinks;
