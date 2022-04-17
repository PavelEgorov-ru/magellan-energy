import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ISection
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
