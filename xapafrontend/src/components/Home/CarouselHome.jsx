import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
      src: "https://images.pexels.com/photos/7075/people-office-group-team.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      altText: 'Slide 1',
      key: '1'
    },
    {
    src:'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      altText: 'Slide 2',
      key: '2'
    },
    { 
    src: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      altText: 'Slide 3',
      key: '3'
    }
  ];
  
  const CarouselHome= () => <UncontrolledCarousel items={items} />;
  
  export default CarouselHome