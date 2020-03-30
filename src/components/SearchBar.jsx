import React, { Component } from "react";
import styled from "styled-components";

const SearchBarDiv = styled.div`
  display: flex;
`;

const InputBar = styled.input`
  margin-left: 0.5rem;
  width: 10vw;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 0.4rem;
  font-size: 1.1rem;
  outline: none;
  background-color: white;
`;

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <SearchBarDiv>
        <InputBar
          name="search"
          placeholder="Search..."
          value={this.props.search}
          onChange={this.props.onChange}
        />
      </SearchBarDiv>
    );
  }
}

export default SearchBar;
