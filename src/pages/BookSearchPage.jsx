import React, { useState, useEffect } from 'react';

export const BookSearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      // Function to fetch data from the API
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setSearchResults(data.docs);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Call the fetchData function when the component mounts or when the searchQuery changes
      fetchData();
    }, [searchQuery]);
  
    return (
      <>
      <div className="header flex flex-col center">
        <div id="Title">Personal BookShelf</div>

        <a href="\MyBookShelf"  id="MyBookShelf">
          My BookShelf
        </a>
        <div id="SearchBoxContainer">
          {/* <img id="SearchIcon" src={SearchIcon} /> */}
          <input
            type="text"
            id="SearchInput"
            placeholder="type book name to search...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div id="MainContent" className='center'>
      
          {searchResults.map((book) => (
            <div className='book-card flex flex-col hor-center'>
            <div className='flex ver-center'>
              <div className='book-title'>Book Title:</div>
              <div className='book-name' key={book.key}>{book.title}</div>
            </div>
            <div className='flex ver-center'>
              <div className='edition-count'>Edition Count:</div>
              <div className='edition-number'>{book.edition_count}</div>
            </div>
            <div className='add-btn'>Add to Bookshelf</div>
            </div>
          
          ))}
          
       
      </div>
      </>);
  };
  
  export default BookSearchPage;
  

  
  
//   <div>
//   <input
//     type="text"
//     placeholder="Search for books"
//     value={searchQuery}
//     onChange={(e) => setSearchQuery(e.target.value)}
//   />

//   <ul>
//     {searchResults.map((book) => (
//       <li key={book.key}>{book.title}</li>
//     ))}
//   </ul>
// </div>