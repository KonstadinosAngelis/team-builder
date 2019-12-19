import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid black;
`;

const Red = styled.div`
    color: red;
`;

const Blue = styled.div`
    color: blue;
`;

const Green = styled.div`
    color: green;
`;

const Members = props => {
    return (
        <div className="member-list">
            {props.member.map(member => (
                <Wrapper><div className = "member" key = {member.id}>
                    <Red><h2>{member.name}</h2></Red>
                    <Blue><h3>{member.email}</h3></Blue>
                    <Green><h4>{member.role}</h4></Green>
                </div></Wrapper>
            ))}
        </div>
    )
};

export default Members;