"use server";

import axios from "axios";
import { log } from "console";

export const getRelatedNews = async () => {
  try {
    const newsResponse = await axios.get(
      "https://wp.coinvestasi.com/wp-json/wp/v2/berita?tags=281"
    );
    const news: any = newsResponse.data;
    const mapIds = new Map<string, number>(news.map((item: any) => [item.author, item.author]));
    const distinctIds = Array.from(mapIds, ([name, value]) => value);    

    const authorsResponse = await axios.all(
      distinctIds.map((id: any) =>
        axios.get(
          `https://wp.coinvestasi.com/wp-json/wp/v2/users/${id}`
        )
      )
    );
    
    const authors = authorsResponse.map(
      (authorResponse: any) => authorResponse.data
    );

    const newsWithAuthorNames = news.map((newsItem: any) => {
      const authorIndex = distinctIds.indexOf(newsItem.author);
      const authorName = authorIndex !== -1 ? authors[authorIndex].name : '';
      return {
        ...newsItem,
        authorName: authorName,
      };
    });

    return newsWithAuthorNames;
  } catch (error) {
    console.error(error);
  }
};

