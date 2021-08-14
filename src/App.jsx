import React, { useState, useEffect, useRef } from 'react';
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

  const getAdditionalData = async () => {
    if (isIntersect) {
      const data = await getData(page);
      if (data.length === 0) {
        setIsLast(true);
      } else {
        setCommentList([...commentList, ...data]);
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    getAdditionalData();
  }, [isIntersect, isLast]);

  return (
    <div>
      <CommentCardList>
        {commentList.map((comment, idx) => (
          <CommentCard key={idx} comment={comment} />
        ))}
      </CommentCardList>
      {!isLast && <div ref={target}>Loading</div>}
    </div>
  );
}

const CommentCardList = styled.ul`
  margin: 30px auto;
  width: 500px;
  background-color: #ffffff;
`;
