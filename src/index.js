import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51x8pmqjY0L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Oh, the Places You'll Go!",
    author: "Dr. Seuss",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/41rzRPDRxJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
