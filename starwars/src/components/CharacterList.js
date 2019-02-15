import React from 'react';
import styled from 'styled-components';

export default function CharacterList({ starwarsChars, getCharInfo }) {
  // console.log(starwarsChars);
  // console.log(getCharInfo('https://swapi.co/api/species/1/', 'name'));
  return (
    <StyledDiv>
      {
        starwarsChars.map(character =>
          <StyledDivCard key={character.name}>
            <h2>{character.name}</h2>
            <p>Birth year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {getCharInfo(character.species, 'name')}</p>
          </StyledDivCard>
        )
      }
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
`;

const StyledDivCard = styled.div`
  background-color: rgba(188, 194, 192, 0.3);
  border-radius: 4px;
  width: 300px;
  margin: 1rem 1rem 0 0;
  border: 1px solid rgb(188, 194, 192);

  :hover {
    background-color: rgba(253, 233, 179, 0.4);
    cursor: pointer;
  }

`;
