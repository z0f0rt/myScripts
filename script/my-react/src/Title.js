import { books } from "./books";
export function Title(props) {
  return (
    <div className="title">
      {books.map((book) => (
        <div
          key={book.title}
          onMouseOver={() => props.setDiscr(book.discr)}
          onMouseOut={() => props.setDiscr("")}
        >
          {book.title}
        </div>
      ))}
    </div>
  );
}
