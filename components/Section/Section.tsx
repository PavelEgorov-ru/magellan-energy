import styles from './Section.module.css';
import cn from 'classnames';
import { ISection } from './Section.props';

export const Section = ({ children }: ISection) => {
  return <section>{children}</section>;
};
