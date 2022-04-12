import styles from './Header.module.css';
import { IHeader } from './Header.props';
import { Htag } from '../../components/index';
import cn from 'classnames';

export const Header = ({ children }: IHeader): JSX.Element => {
  return (
    <header className={cn(styles.header)}>
      {children}
      <div className={cn(styles.info)}></div>
      <div className={cn(styles.background)}>
        {/* <Htag tag="h1" colorWith={true} className={cn(styles.h1)}>
          Производим и поставляем электрооборудование по всей России
        </Htag> */}
      </div>
    </header>
  );
};
