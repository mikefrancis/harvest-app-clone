import React from 'react';
import loadingIcon from './../img/loading.svg';
import styled from 'styled-components';
import { Container } from '../styled';

const LoadingIcon = styled.img`
    margin: auto;
    width: 2rem;
`;

const Loading = () => (
    <Container>
        <LoadingIcon src={ loadingIcon } alt="Loading..." />
    </Container>
);

export default Loading;
