import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { getData } from './api/getData.js';
import { useObserver } from './hooks/useObsever.js';
import CommentCard from './components/CommentCard.jsx';

export default function App() {
  const [page, setPage] = useState(1);
  const [commentList, setCommentList] = useState([]);
  const [isLast, setIsLast] = useState(false);
  const target = useRef(null);
  const isIntersect = useObserver(target);

  const getAdditionalData = useCallback(async () => {
    if (isIntersect) {
      const data = await getData(page);
      if (data.length === 0) {
        setIsLast(true);
      } else {
        setCommentList([...commentList, ...data]);
        setPage((prev) => prev + 1);
      }
    }
  }, [commentList, page, isIntersect]);

  useEffect(() => {
    getAdditionalData();
  }, [getAdditionalData, isIntersect, isLast]);

  return (
    <div>
      <CommentCardList>
        {commentList.map((comment, idx) => (
          <CommentCard key={idx} comment={comment} />
        ))}
      </CommentCardList>
      {!isLast && <Observer ref={target}>Loading</Observer>}
    </div>
  );
}

const CommentCardList = styled.ul`
  margin: 30px auto;
  width: 500px;
  background-color: #ffffff;
`;

const Observer = styled.div`
  margin: 30px auto;
  width: 500px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
