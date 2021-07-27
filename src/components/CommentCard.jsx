import React from 'react';
import styled from 'styled-components';

export default function CommentCard({ comment }) {
  return (
    <CommentCardWrap>
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
    </CommentCardWrap>
  );
}

const CommentCardWrap = styled.li`
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
