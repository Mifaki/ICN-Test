"use server";

import axios from "axios";

export const getRelatedNews = async () => {
  try {
    const newsResponse = await axios.get(
      "https://wp.coinvestasi.com/wp-json/wp/v2/berita?tags=281"
    );

    const news: any = newsResponse.data;

    const authorIds = Array.from(new Set(news.map((item: any) => item.author)));

    const authorsResponse = await axios.all(
      authorIds.map((id: any) =>
        axios.get(`https://wp.coinvestasi.com/wp-json/wp/v2/users/${id}`)
      )
    );

    const authors = authorsResponse.map(
      (authorResponse: any) => authorResponse.data
    );

    const newsWithAuthorNames = news.map((newsItem: any) => {
      const authorIndex = authorIds.indexOf(newsItem.author);
      const authorName = authorIndex !== -1 ? authors[authorIndex].name : '';
      return {
        ...newsItem,
        authorName: authorName,
      };
    });

    const tagIds = Array.from(new Set(news.reduce((tags: number[], newsItem: any) => tags.concat(newsItem.tags || []), [])));

    const tagsResponse = await axios.all(
      tagIds.map((tagId: any) =>
        axios.get(`https://wp.coinvestasi.com/wp-json/wp/v2/tags/${tagId}`)
      )
    );

    const tagsData = tagsResponse.map(
      (tagResponse: any) => tagResponse.data
    );

    const newsWithTags = newsWithAuthorNames.map((newsItem: any) => {
      const tagNames = newsItem.tags
        ? newsItem.tags.map((tagId: number) => {
            const tagData = tagsData.find((tag: any) => tag.id === tagId);
            return tagData ? tagData.name : '';
          })
        : [];
      
      return {
        ...newsItem,
        tagNames: tagNames,
      };
    });

    console.log(newsWithTags);

    return newsWithTags;
  } catch (error) {
    console.error(error);
  }
};
