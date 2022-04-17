import { IHtagProps } from './Htag.props';
import cn from 'classnames';
import styles from './Htag.module.css';

export const Htag = ({
  tag,
  children,
  colorWith,
  className,
  ...props
}: IHtagProps): JSX.Element => {
  console.log([className]);
  switch (tag) {
    case 'h1':
      return (
        <h1
          className={cn(styles.h1, className, {
            [styles.h_white]: colorWith == true,
          })}
          {...props}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={cn(styles.h2, className, { [styles.h_white]: colorWith == true })}
          {...props}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={cn(styles.h3, className, {
            [styles.h_white]: colorWith == true,
          })}
          {...props}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={cn(styles.h4, className, {
            [styles.h_white]: colorWith == true,
          })}
          {...props}
        >
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5
          className={cn(styles.h5, className, {
            [styles.h_white]: colorWith == true,
          })}
          {...props}
        >
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6
          className={cn(styles.h6, className, {
            [styles.h_white]: colorWith == true,
          })}
          {...props}
        >
          {children}
        </h6>
      );
    default:
      return <></>;
  }
};
