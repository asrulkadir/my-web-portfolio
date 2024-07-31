import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../utils/color';

const NotFoundDiv = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.primary};
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  div {
    width: 50%;
    margin: auto;

    h1 {
      text-align: center;
      margin-bottom: 1rem;
    }

    button {
      margin: auto;
      display: block;
      font-weight: bold;
      padding: 0.5rem;
      background: ${colors.primary};
      cursor: pointer;
      color: whitesmoke;
    }
  }
`;

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundDiv>
      <div>
        <h1>OPPSSSS....</h1>
        <h1>PAGE NOT FOUND</h1>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </NotFoundDiv>
  );
};

export default NotFound;
