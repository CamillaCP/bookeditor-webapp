import { useNavigate } from 'react-router-dom';

export const books = [
    {id: 1, name: "Gulliver's Travels", author: "Jonathan Swift" },
    {id: 2, name: "Robinson Crusoe", author: "Daniel Defoe" },
    {id: 3, name: "A Christmas Carol", author: "Charles Dickens" },
    {id: 4, name: "Sherlock Holmes", author: "Arthur Conan Doyle" },
    {id: 5, name: "Treasure Island", author: "Robert Louis Stevenson" },
    {id: 6, name: "Dubliners", author: "James Joyce" },
    {id: 7, name: "Oliver Twist", author: "Charles Dickens" },
    {id: 8, name: "Pride And Prejudice", author: "Jane Austen" }
  ];

  export default function Book() {
    let navigate = useNavigate();
    
    return (
      <div className="book-list">
        {books.map((book) => (
          <a key={book.id} onClick={() => {navigate(`/${book.id}`)}}>{""} {book.name} </a>
        )).slice(1,5)}
      </div>
    );
  }