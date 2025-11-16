import React, { use } from 'react';
import BookCard from '../BookCard/BookCard';

const Books = ({bookPromise }) => {
    const books = use (bookPromise)

    // console.log(books)

    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
           {
            books.map(book=><BookCard book={book}></BookCard>)
           }
        </div>
    );
};

export default Books;