import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { styled } from "styled-components";
import { useSearchStore } from "../../store";
import { shallow } from "zustand/shallow";

export default function Searchbar() {
  const { query, setQuery } = useSearchStore(
    (state) => ({
      query: state.query,
      setQuery: state.setQuery,
    }),
    shallow
  );

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <SearchBarStyle>
      <SearchButtonStyle>
        <FontAwesomeIcon icon={faSearch} />
      </SearchButtonStyle>
      <input
        type="text"
        placeholder="search products, tags, keyword etc..."
        value={query}
        onChange={handleInput}
      />
      {/* {query && (
        <ul className="search-autocomplete">
          <li>example of item</li>
        </ul>
      )} */}
    </SearchBarStyle>
  );
}

const SearchBarStyle = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin-inline: auto;
  margin-block: 2rem 4rem;
  position: relative;

  & > * {
    border: 1px solid #707070;
  }

  & input {
    flex: 1;
    padding-inline: 1rem;
    font-size: 16px;
    border-radius: 0;

    &:focus-within,
    &:focus-visible,
    &:focus {
      & ~ .search-autocomplete {
        animation: appear 500ms forwards;
      }
    }
  }

  & .search-autocomplete {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: white;
    margin: 0;
    padding-inline: 0;
    translate: 0 100%;
    list-style-type: none;
    scale: 1 0;
    transform-origin: top;

    @keyframes appear {
      100% {
        scale: 1 1;
      }
    }

    & li {
      margin: 0.5rem 1rem;
      font-size: 0.75rem;
    }
  }
`;

const SearchButtonStyle = styled.button`
  background-color: var(--primary);
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  border-radius: 0;
`;
