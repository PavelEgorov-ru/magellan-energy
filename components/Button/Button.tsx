import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({ view, children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.button_simple]: view == 'simple',
        [styles.button_form]: view == 'form',
        [styles.button_cards]: view == 'cards',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
