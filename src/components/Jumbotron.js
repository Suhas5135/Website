import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import roadimage from '../assets/roadimage.jpg';

const Styles = styled.div`
 .jumbo {
     background: url(${roadimage}) no-repeat fixed bottom;
     background-size: cover;
     color: 000000;
     height:200px;
     position:relative;
     z-indexz: -2;
 }


`;


export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            
            <Container>
                <h1>Welcome To The Blog.io</h1>
                <h6>Country Road</h6>
            </Container>
            
        </Jumbo>
    </Styles>
)