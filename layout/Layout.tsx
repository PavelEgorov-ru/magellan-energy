import { ILayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { FunctionComponent } from 'react';
import cn from 'classnames';

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <body className={cn(styles.page)}>
      <Header>привет</Header>
      <main></main>
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
