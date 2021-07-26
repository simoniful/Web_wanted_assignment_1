import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from './config';
import { fetchGet } from './utils/fetches';

export default function App() {
  const [commentList, setCommentList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
    window.addEventListener('scroll', infiniteScroll);
    return () => window.removeEventListener('scroll', infiniteScroll);
  }, [page]);

  const getData = () => {
    fetchGet(`${API}?_page=${page}&_limit=10`)
      .then((res) => res.json())
      .then((res) => {
        setCommentList([...commentList, ...res]);
      });
  };

  const infiniteScroll = () => {
    const { documentElement, body } = document;

    const scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight,
    );
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
      getData();
    }
  };

  return (
    <CommentCardList>
      {commentList.map((comment) => (
        <CommentCard>
          <IdSection>
            <h2>Comment Id</h2>
            <span>{comment.id}</span>
          </IdSection>
          <EmailSection>
            <h2>Email</h2>
            <span>{comment.email}</span>
          </EmailSection>
          <CommentSection>
            <h2>Comment</h2>
            <div>{comment.body}</div>
          </CommentSection>
        </CommentCard>
      ))}
    </CommentCardList>
  );
}

const CommentCardList = styled.ul`
  margin: 30px auto;
  width: 500px;
  background-color: #ffffff;
`;

const CommentCard = styled.li`
  padding: 20px;
  border: 0.5px solid #ced4da;
  margin: 12px auto;
  border-radius: 20px;
  background-color: #f8f9fa; ;
`;

const IdSection = styled.section`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 21px;
  color: #212529;

  h2 {
    display: inline;
    font-weight: bold;
    margin-right: 12px;
  }
`;

const EmailSection = styled.section`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 21px;
  color: #212529;

  h2 {
    display: inline;
    font-weight: bold;
    margin-right: 12px;
  }
`;

const CommentSection = styled.section`
  font-size: 18px;
  line-height: 21px;
  color: #212529;

  h2 {
    font-weight: bold;
    margin-right: 12px;
  }
`;
