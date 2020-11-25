import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Main from '../../Main/Main';

function Home() {
  return (
    <>
      <Main {...homeObjOne} />
      <Main {...homeObjThree} />
      <Main {...homeObjTwo} />
      <Main {...homeObjFour} />
    </>
  );
}

export default Home;