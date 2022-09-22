import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

// class HouseFilter extends Component {
//   state = {}

//   onSearchChange = (e) => {
//     const country = e.target.value;
//     this.props.filterHouses(country);
//   }

//   render() {
//     const search = this.state.search;
//     const countries = this.props.countries || [];

//     return (
//       <div className="form-group row mt-3">
//         <div className="offset-md-2 col-md-4">
//           Look for your dream house in country:
//         </div>
//         <div className="col-md-4">
//           <select className="form-control" value={search} onChange={this.onSearchChange}>
//             {countries.map((c) => <option key={c} value={c}>{c}</option>)}
//           </select>
//         </div>
//       </div>
//     );
//   }
// }

const HouseFilter = ( { allHouses } ) => {
  const navigate = useNavigate();
  const countries = allHouses ?
    Array.from(new Set(allHouses.map(h => h.country))) : [];

  countries.unshift(null);

  const onSearchChange = (e) => {
    const country = e.target.value;
    // history.push(`/searchresults/${country}`);
    // navigate('/searchresults/' + country, { state: { country: country } });
    navigate(`/searchresults/${country}`);
  };

  return (
    <div className="form-group row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in country:
      </div>
      <div className="col-md-4">
        <select className="form-select" onChange={onSearchChange}>
          {countries.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    </div>
  );
};

export default HouseFilter;