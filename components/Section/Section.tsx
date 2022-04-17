import styles from './Section.module.css';
import cn from 'classnames';
import { ISection } from './Section.props';

export const Section = ({ children, className, ...props }: ISection) => {
  return <section {...props}>{children}</section>;
};
