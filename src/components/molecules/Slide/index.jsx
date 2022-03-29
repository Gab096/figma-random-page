import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {  Images } from '../../../assets';
import { Container,EachSlide, Indicator, TextContainer,  } from './style';


const slideImages = [
  {
    url:Images.TodoList,
    title: 'We are lOREM IPSUM',
    caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s ',
  },
  {
    url: Images.Money,
    title: 'We are lOREM IPSUM',
    caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s '
  },
  {
    url: Images.Key,
    title: 'We are lOREM IPSUM',
    caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s '
  },
];
const Properties = {
  arrows:false,
  indicators: true,
  scale: 0.4,
  indicators: i => (<Indicator className='active' />),
}

export const Slideshow = () => {
    return (
      <Container>
        <Slide {...Properties}>
         {slideImages.map((slideImage, index)=> (
            <EachSlide key={index}>
              <TextContainer>
                <h1>{slideImage.title}</h1>
                <p>{slideImage.caption}</p>
              </TextContainer>
              <img src={slideImage.url} alt="gfs" />
            </EachSlide>
          ))} 
        </Slide>
      </Container>
    )
}