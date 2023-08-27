import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Loader from "./Loader";
import PropTypes from "prop-types";
export default function News(props) {
  // articles array start
  // let articles =[]
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  // let page =1;
  let [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  // console.log("outside "+page)
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  useEffect(() => {
    document.title = `NewsOwl- ${capitalizeFirstLetter(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  }, [page, props.searchValue]);
  //************Strat******this function for navigate to the pages using  previous and next button ******************//
  const updateNews = async () => {
    try {
      setLoading(true);
      // console.log(props.searchValue);
      const rUrl = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      const searchUrl = `https://newsapi.org/v2/everything?q=${props.searchValue}&sortBy=popularity&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      const url = `${props.searchValue.length < 1 ? rUrl : searchUrl}`;
      // console.log(url);
      let data = await fetch(url);
      props.setProgress(40);
      let parsedData = await data.json();
      if (!data.ok) {
        throw new Error(parsedData.message);
      }
      props.setProgress(80);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      alert(error.message);
    }

    // console.log(totalResults)
  };
  const nextHandle = () => {
    setPage(page + 1);
  };
  const prevHandle = () => {
    setPage(page - 1);
  };
  //************End******this function for navigate to the pages using  previous and next button ******************//

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        NewsOwl-{" "}
        {props.searchValue.length > 1
          ? `Search Results For ${capitalizeFirstLetter(props.searchValue)}`
          : capitalizeFirstLetter(props.category)}{" "}
        Top Headlines
      </h1>
      <div className="container my-3">
        {loading && <Loader />}
        <p className="text-right">{`Total Results ${totalResults}`}</p>
        <div className="row">
          {!loading &&
            articles.map((element) => {
              return (
                <div className="col-md-4  my-5" key={element.url}>
                  <NewsItems
                    title={element.title}
                    url={element.url}
                    description={element.description}
                    urlToImage={
                      !element.urlToImage
                        ? "https://png.pngtree.com/element_our/sm/20180516/sm_5afc4cd0dcaca.jpg"
                        : element.urlToImage
                    }
                    author={!element.author ? "Unknown" : element.author}
                    publishedAt={element.publishedAt}
                    source={element.source}
                  />
                </div>
              );
            })}
        </div>
      </div>
      {/* previous button and next button  */}
      <div className="d-flex justify-content-between container my-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={prevHandle}
          disabled={page <= 1}
        >
          {" "}
          &#8592; Previous
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={nextHandle}
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
        >
          Next &#8594;
        </button>
      </div>
    </>
  );
}
News.defaultProps = {
  pageSize: 9,
  category: "general",
  country: "in",
  apiKey: '',
};
News.prototype = {
  pageSize: PropTypes.number.isRequired,
};
