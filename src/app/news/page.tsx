import NewsContainer from "@/components/pages/news/NewsContainer";
import React from "react";

import { homePageNews } from "@/data/News";

const NewsPage = () => {
  return (
    <div className="w-full mt-7">
      <NewsContainer news={homePageNews} />
    </div>
  );
};

export default NewsPage;
