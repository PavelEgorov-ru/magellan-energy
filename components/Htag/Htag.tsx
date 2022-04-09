import { IHtagProps } from './Htag.props';
import cn from 'classnames';
import styles from './Htag.module.css';

export const Htag = ({ tag, children, colorWith }: IHtagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return (
        <h1
          className={cn(styles.h1, {
            [styles.h_white]: colorWith == true,
          })}
        >
          {children}
        </h1>
      );
    case 'h2':
      return <h2 className={cn(styles.h2, { [styles.h_white]: colorWith == true })}>{children}</h2>;
    case 'h3':
      return (
        <h3
          className={cn(styles.h3, {
            [styles.h_white]: colorWith == true,
          })}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={cn(styles.h4, {
            [styles.h_white]: colorWith == true,
          })}
        >
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5
          className={cn(styles.h5, {
            [styles.h_white]: colorWith == true,
          })}
        >
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6
          className={cn(styles.h6, {
            [styles.h_white]: colorWith == true,
          })}
        >
          {children}
        </h6>
      );
    default:
      return <></>;
  }
};
