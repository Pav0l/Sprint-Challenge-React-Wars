import React from 'react';
import styled from 'styled-components';

export default function CharacterList({ starwarsChars }) {
  // const charName = starwarsChars.map(char => char.name);

  return (
    <StyledDiv>
      {
        starwarsChars.map(character =>
          <StyledDivCard key={character.name}>
            <h2>{character.name}</h2>
            <p>Birth year: {character.birth_year}</p>
            <p>{character.starships.forEach(ship=>ship.name)}</p>
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
  background-color: rgba(188, 194, 192, 0.2);
  border-radius: 4px;
  width: 33.3%;
  margin-top: 1rem;

  border: 1px solid rgb(188, 194, 192)


`;
