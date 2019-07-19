import React from 'react';
import './PhotoCard.scss';
import { Card, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { StyledH2 } from '../Styles.js';

const StyledCard = styled(Card)`
width: 300px;
max-width: 100%;
background-color: lightblue !important;
img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 0;
    padding-bottom: 0;
}
h2 {
    margin-top: 0;
    padding-top: 25px;
    background: linear-gradient(#f8f8f8, #ffffff);
}
.content {
    font-size: 0.8rem;
    line-height: 1.5;
}
`;

function PhotoCard(props) {
  console.log(props);
  return (
    <Card className="photo-card">
      <Image src={props.url} />
      <StyledH2 color="red">{props.title}</StyledH2>
      <Card.Content>
        <div>{props.date}</div>
        <Card.Description className="content">
          {props.explanation}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default PhotoCard;
