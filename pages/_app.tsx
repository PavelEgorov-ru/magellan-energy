import '../styles/global.css';
import React from 'react';
import Head from 'next/head';
import { Htag, Button } from '../components';
import PhoneIcon from '../public/telephone-fill.svg';

const App = ({}) => {
  const Click = (): void => {
    console.log('Привет кнопка');
  };

  return (
    <>
      <Head>
        <title>Мой первый сайт</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div>Привет мир!!!</div>
      <Htag tag="h1">Самый главный заголовок, который будет на странице</Htag>
      <Htag tag="h2" colorWith={true}>
        Самый главный заголовок, который будет на странице
      </Htag>
      <Htag tag="h3">Самый главный заголовок, который будет на странице</Htag>
      <Htag tag="h4">Самый главный заголовок, который будет на странице</Htag>
      <Htag tag="h5">Самый главный заголовок, который будет на странице</Htag>
      <Htag tag="h6">Самый главный заголовок, который будет на странице</Htag>
      <Button view="cards" onClick={Click}>
        Первая кнопка c длинным текстом
      </Button>
      <Button view="form">Вторая </Button>
      <Button view="simple">Третья кнопка</Button>
    </>
  );
};

export default App;
