import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'
import LibraryCards from '../components/librarycards'
import '../style/style.css'
import '../style/app.css'

const List = () => {
    const [toBeReadBooks, setToBeReadBooks] = useState([]);
    const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
    const [alreadyReadBooks, setAlreadyReadBooks] = useState([]);

    const fetchData = async (url, setData) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data.reading_log_entries || []);
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error);
        }
    };

    useEffect(() => {
        fetchData('https://openlibrary.org/people/lindsey_jimenez/lists/OL239279L/seeds.json', setToBeReadBooks);
        fetchData('https://openlibrary.org/people/lindsey_jimenez/lists/OL239278L/seeds.json', setCurrentlyReadingBooks);
        fetchData('https://openlibrary.org/people/lindsey_jimenez/lists/OL239280L/seeds.json', setAlreadyReadBooks);
    }, []);
    console.log('to be read:' + toBeReadBooks);
    console.log('currently:' + currentlyReadingBooks);
    console.log('finished' + alreadyReadBooks);
    return (
        <div>
            <Nav />
            <div className="fantasy-bg-image img-fluid">
                <div className="mask">
                    <div className="container-fluid">
                        {/* Render To Be Read List */}
                        <div className="row">
                            <div className="to-be-read col-md-4">
                                <h2>To Be Read</h2>
                                <div id="to-be-read-list" className="author-list horizontal-scroll">
                                    {toBeReadBooks.map((book) => (
                                        <LibraryCards key={book.key} book={book} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Render Currently Reading List */}
                        <div className="row">
                            <div className="currently-reading col-md-4">
                                <h2>Currently Reading</h2>
                                <div id="currently-reading-list" className="author-list horizontal-scroll">
                                    {currentlyReadingBooks.map((book) => (
                                        <LibraryCards key={book.key} book={book} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Render Finished List (Already Read) */}
                        <div className="row">
                            <div className="already-read col-md-4">
                                <h2>Finished Books</h2>
                                <div id="already-read-list" className="author-list horizontal-scroll">
                                    {alreadyReadBooks.map((book) => (
                                        <LibraryCards key={book.key} book={book} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;