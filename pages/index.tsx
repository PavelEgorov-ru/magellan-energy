import { withLayout } from '../layout/Layout';

//код для проверки работы
import Router from 'next/router';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/') {
      Router.push('/hello');
    }
  }, []);

  return <></>;
}

export default withLayout(Home);
