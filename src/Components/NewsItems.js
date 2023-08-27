import React from "react";
export default function NewsItems(props) {
  return (
    <>
      <div className="card position-relative">
        <img src={props.urlToImage} className="card-img-top" alt="" />
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-text">{props.description}</p>
          <p className="card-text author">By {props.author}</p>
          <p className="card-text">{new Date(props.publishedAt).toGMTString()}</p>
          <a href={props.url} className="btn btn-primary" target="_blank" rel="noreferrer">Read More</a>
          <p className="card-text source btn btn-danger">{props.source.name}</p>
        </div>
      </div>
    </>
  );
}
