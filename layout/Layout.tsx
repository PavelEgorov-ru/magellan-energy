import { ILayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { FunctionComponent } from 'react';
import cn from 'classnames';
import { Footer } from './Footer/Footer';

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <div className={cn(styles.page)}>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
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
