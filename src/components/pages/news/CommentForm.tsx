"use client";

import Button from "@/components/main/Button";
import Input from "@/components/main/Input";
import React from "react";

const CommentForm = () => {
  return (
    <form className="grid grid-cols-6 gap-6">
      <div className="w-full col-span-6">
        <Input
          type="text"
          isMultipleLine
          rows={5}
          name="comment"
          placeholder="اینجا نظر خود را تایپ کنید ..."
          label="نظر شما"
        />
      </div>
      <div className="col-span-2">
        <Input
          type="text"
          name="name"
          placeholder="مثال : علی"
          label="نام شما"
        />
      </div>
      <div className="col-span-2">
        <Input
          type="email"
          name="email"
          placeholder="Ex:info@samat.ir"
          label="آدرس ایمیل"
        />
      </div>
      <div className="col-span-2 self-end">
        <Button text="ارسال" />
      </div>
    </form>
  );
};

export default CommentForm;
