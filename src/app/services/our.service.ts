import { Injectable } from '@angular/core';

export interface OurServices {
  img?: string;
  head: string;
  content?: string;
  serviceBox7Span?: string;
  button?: string;
  link?: string;
}

@Injectable({
  providedIn: 'root'
})
export class OurService {

  constructor() { }

  ourServices :OurServices[] = [
    {
      head: 'Find the right offers',
    },
    {
      img: '../assets/images/mobile.png',
      head: 'Application Management and Modernisation',
      content:
        'Here at Tagline, we provide the service of Application management and modernisation for the growth of your business. We update the old application with new approaches, including the latest languages, frameworks, and platforms.',
      link: 'Learn More ->',
    },

    {
      img: '../assets/images/web-design-icon.webp',
      head: 'Software Product Engineering',
      content:
        'We are dedicated to providing the best Software product engineering services for your business. Our team of developers provides the service of software product engineering and it includes designing, developing, testing, and deploying the software products.',
      link: 'Learn More ->',
    },

    {
      img: '../assets/images/testing-icon.webp',
      head: 'Agile QA, Automation, and DevOps',
      content:
        'At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA, Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QA ensures the quality of the software.',
      link: 'Learn More ->',
    },

    {
      img: '../assets/images/uiux-design-icon.webp',
      head: 'Digital Strategy & Design',
      content:
        'Tagline Infotech helps clients to create a clear digital strategy and design for the growth of their businesses. Our developers and UI UX designers put the user first to create easy-to-navigate interfaces and smooth end-to-end experiences.',
      link: 'Learn More ->',
    },

    {
      img: '../assets/images/software-development-1.png',
      head: 'Software outsourcing company',
      content:
        'Tagline Infotech is an experienced software outsourcing company that provides services for various businesses. We have a reliable team of developers that provides high-quality outsourcing services to scale your business.',
      link: 'Learn More ->',
    },
    {
      head: "Don't know what to choose?",
      serviceBox7Span: 'Drop us a line.',
      button: 'Contact Us',
    },
  ];
}
