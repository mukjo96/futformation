import { useEffect } from 'react';

import axios from 'axios';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        'https://fotmob-cors.herokuapp.com/https://www.fotmob.com/api/teams?id=9768&tab=news&type=team&timezone=Asia/Seoul'
      );
      console.log(response);
    })();
  }, []);

  return (
    <Main meta={<Meta title="Home" description="Welcome home" />}>Home</Main>
  );
};

export default Index;
