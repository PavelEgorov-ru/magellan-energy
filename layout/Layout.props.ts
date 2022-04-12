import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ILayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement> {
  children: ReactNode;
}
