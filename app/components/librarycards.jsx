import React, { useState, useEffect } from 'react';

const LibraryCards = ({ book }) => {
    const [description, setDescription] = useState('Description not available');

    useEffect(() => {
        const fetchDescription = async () => {
            if (book.url) {
                try {
                    const response = await fetch(`https://openlibrary.org${book.url}.json`);
                    const data = await response.json();

                    if (data.description) {
                        setDescription(data.description.value || 'Description not available');
                    }
                } catch (error) {
                    console.error('Error fetching description:', error);
                }
            }
        };

        fetchDescription();
    }, [book.url]);

    return (
        <div className="book-list-card">
            {/* Front card content */}
            <div className="front-card front">
                <div className="frontcover bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src={book.smallCoverUrl} className="img-fluid" alt={book.title} />
                </div>
                <div className="front-body text-center">
                    <h5 className="card-title">{book.title}</h5>
                    <h6 className="author">{book.authors}</h6>
                </div>
            </div>
            {/* Back card content */}
            <div className="back-card back">
                <div className="back-details">
                    <div className="row">
                        <h5 className="card-rating col-md-6">{book.rating}</h5>
                        <h5 className="page-count col-md-6">Pages: {book.pageCount}</h5>
                    </div>
                    <br />
                    <p className="description">{description}</p>
                    <br />
                    <div className="row">
                        <a className="published-date col-md-6">Published: {book.publishedDate}</a>
                        <a className="isbn col-md-6">ISBN Number: {book.isbn}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryCards;
