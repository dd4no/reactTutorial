import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51x8pmqjY0L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "Oh, the Places You'll Go!",
  author: "Dr. Seuss",
};
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41rzRPDRxJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "Where the Crawdads Sing",
  author: "Delia Owens",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));