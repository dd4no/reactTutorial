import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL604_SR604,400_.jpg",
    title: "Oh, the Places You'll Go!",
    author: "Dr. Seuss",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL604_SR604,400_.jpg",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL604_SR604,400_.jpg",
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

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Complex Example
      </button>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
