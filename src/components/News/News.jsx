import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "flowbite-react";
import fetchData from "./Fetchdata";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const pageUrl = window.location.href;
  const urlParts = new URL(pageUrl);
  const pathArray = urlParts.pathname.split("/").filter((part) => part !== "");

  var lastSlug = pathArray[pathArray.length - 1];
  if (lastSlug == undefined) {
    lastSlug = "top";
  }

  const updateNews = async () => {
    try {
      const parsedData = await fetchData(lastSlug);
      setArticles(parsedData.results);
      setPage(parsedData.nextPage);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    } catch (error) {
      // Handle error
      console.error("Error updating news:", error);
      setLoading(false);
    }
  };

  const fetchMoreData = async () => {
    try {
      const parsedData = await fetchData(lastSlug, page);
      setPage(parsedData.nextPage);
      setArticles(articles.concat(parsedData.results));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    } catch (error) {
      // Handle error
      console.error("Error fetching more data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <div className="container mx-auto pt-20">
      <h1 className="text-2xl font-semibold py-4 text-center capitalize">
        {props.category} Headlines
      </h1>

      {loading && (
        <div className="text-center">
          <Spinner />
        </div>
      )}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={
          <div className="text-center">
            <Spinner />
          </div>
        }
      >
        <div className="flex flex-wrap">
          {articles.map((element, index) => {
            return (
              <NewsItem
                title={element.title}
                description={element.description}
                imgurl={element.image_url}
                publishedAt={element.pubDate}
                link={element.link}
                source={element.source_id}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}
