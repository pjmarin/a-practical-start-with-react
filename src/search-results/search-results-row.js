import React from 'react';
import { useNavigate } from 'react-router-dom';

// const SearchResultsRow = (props) => {
//     const setActive = (e) => {
//         e.preventDefault();
//         props.setActiveHouse(props.house);
//     };

//     return <tr onClick={setActive}>
//         <td>{props.house.address}</td>
//         <td>{props.house.price}</td>
//         <td>{props.house.likes}</td>
//     </tr>
// };

const SearchResultsRow = ( { house } ) => {
    const navigate = useNavigate();

    const setActive = () => {
      navigate(`/house/${house.id}`);
    };

    // return window.location.href.split("/")[4] === props.country ?
    // <tr onClick={setActive}>
    //   <td>{props.house.address}</td>
    //   <td>{props.house.price}</td>
    //   <td>{props.house.likes}</td>
    // </tr> : <h1>No search results</h1>

    
    // return props.allHouses.length ? 
    //     props.allHouses.map((house) => {          
    //         return <tr key={house.id} onClick={setActive}>
    //           <td>{house.address}</td>
    //           <td>{house.price}</td>
    //           <td>{house.likes}</td>
    //         </tr>
          
    //     }) : <h1>No search results</h1>

          
    return <tr key={house.id} onClick={setActive}>
        <td>{house.address}</td>
        <td>{house.price}</td>
    </tr>
      
    
    
};

export default SearchResultsRow;