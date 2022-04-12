import { ILayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { FunctionComponent } from 'react';

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <body>
      <Header>привет</Header>
    </body>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
