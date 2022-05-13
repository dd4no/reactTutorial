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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          reiciendis nulla molestias dignissimos possimus consequuntur
          exercitationem. Similique velit tenetur non!
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
