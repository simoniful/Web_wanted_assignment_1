import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { API, LIMIT } from './utils/config';
import { fetchGet } from './utils/fetches';
import CommentCard from './components/CommentCard.jsx';

export default function App() {
  const [commentList, setCommentList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = useCallback(async () => {
    const response = await fetchGet(`${API}?_page=${page}&_limit=${LIMIT}`);
    const commentData = await response.json();
    setCommentList((prevComments) => prevComments.concat(commentData));
  }, [page]);

  useEffect(() => {
    getData();
    let throttle;
    const infiniteScroll = () => {
      if (throttle) return;
      throttle = setTimeout(() => {
        const { documentElement, body } = document;
        const scrollHeight = Math.max(
          documentElement.scrollHeight,
          body.scrollHeight,
        );
        const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
        const clientHeight = documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
          setPage((page) => page + 1);
        }
        throttle = null;
      }, 300);
    };
    window.addEventListener('scroll', infiniteScroll);
    return () => window.removeEventListener('scroll', infiniteScroll);
  }, [page]);

  return (
    <CommentCardList>
      {commentList.map((comment, idx) => (
        <CommentCard key={idx} comment={comment} />
      ))}
    </CommentCardList>
  );
}

const CommentCardList = styled.ul`
  margin: 30px auto;
  width: 500px;
  background-color: #ffffff;
`;
