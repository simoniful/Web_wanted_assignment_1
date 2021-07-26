import React from 'react';
import styled from 'styled-components';

export default function App() {
  return (
    <CardListWrap>
      <CommentCardList></CommentCardList>
    </CardListWrap>
  );
}

const CardListWrap = styled.div``;

const CommentCardList = styled.ul``;
