import SearchBar from "../searchBar/searchBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterByType,
  filterByOrigin,
  resetFilteredPokemons,
  setSortingCriteria,
  setSortingDirection,
  fetchPokemons,
  fetchTypes,
} from "../../redux/actions";

import styles from "../../assets/global.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const [localCriteria, setLocalCriteria] = useState(null);
  const [localDirection, setLocalDirection] = useState(null);

  const handleTypeFilter = (event) => {
    const type = event.target.value;

    if (type === "") {
      dispatch(resetFilteredPokemons());
    } else {
      
      dispatch(filterByType(type));
    }
  };

  const handleOriginFilter = (event) => {
    const origin = event.target.value;

    if (origin === "") {
      
      dispatch(resetFilteredPokemons());
    } else {
      
      dispatch(filterByOrigin(origin));
    }
  };

  const handleSortingCriteria = (event) => {
    const criteria = event.target.value;
    setLocalCriteria(criteria);

    if (localDirection) {
      dispatch(setSortingCriteria(criteria));
      dispatch(setSortingDirection(localDirection));
    }
  };

  const handleSortingDirection = (event) => {
    const direction = event.target.value;
    setLocalDirection(direction);

    if (localCriteria) {
      dispatch(setSortingCriteria(localCriteria));
      dispatch(setSortingDirection(direction));
    }
  };

  const handleShowAllClick = () => {
    dispatch(resetFilteredPokemons());
    dispatch(fetchPokemons());
  };

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  return (
    <div className={styles.navBar}>
      <SearchBar />

      <button className={styles.button} onClick={handleShowAllClick}>
        Show All
      </button>

      {/* -----------FILTERS------------ */}

      <select onChange={handleTypeFilter}>
        <option value="">Type</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <select onChange={handleOriginFilter}>
        <option value="">Origin</option>
        <option value="API">API</option>
        <option value="DB">Created</option>
      </select>

      {/* -----------ORDER------------ */}

      <div className="sorting-container">
        <select onChange={handleSortingCriteria}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="attack">Attack</option>

        </select>

        <select onChange={handleSortingDirection}>
          <option value="">Direction</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <Link to={`/create`}>
        {" "}
        <button className={styles.button}>Create Pokemon</button>{" "}
      </Link>
    </div>
  );
};

export default NavBar;