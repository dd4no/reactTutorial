import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51x8pmqjY0L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Oh, the Places You'll Go!",
    author: "Dr. Seuss",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41rzRPDRxJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
  },
];
const names = ["dave", "joe", "jim"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);
function BookList() {
  return <section className="booklist">{newNames}</section>;
}

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
