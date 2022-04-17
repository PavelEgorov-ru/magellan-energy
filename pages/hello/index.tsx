import styles from './Hello.module.css';
import { withLayout } from '../../layout/Layout';
import { Section, Htag } from '../../components';
import cn from 'classnames';

const Hello = (): JSX.Element => {
  return (
    <Section className={cn(styles.about)}>
      <Htag tag="h2" className={cn(styles.about__h2)}>
        о нас
      </Htag>
      <div className={cn(styles.line)}></div>
      <p className={cn(styles.text)}>
        «Магелан-Энерджи» производит электротехническое оборудование с географией поставок по всей
        территории России, включая Дальний Восток, районы Крайнего Севера и Арктики. Применение
        инновационных технических решений, непрерывное совершенствование и модернизация
        производственных процессов на предприятии, высококвалифицированные сотрудники и здоровая
        деловая атмосфера внутри коллектива позволяют нам выводить на рынок новые образцы
        оборудования, обладающего уникальными техническими и эксплуатационными характеристиками.
      </p>
      <ul className={cn(styles.cards)}>
        <li className={cn(styles.card)}>
          <h3 className={cn(styles.h3)}>15</h3>
          <p className={cn(styles.text, styles.text_center)}>лет на рынке энергетики</p>
        </li>
        <li className={cn(styles.card)}>
          <h3 className={cn(styles.h3)}>38</h3>
          <p className={cn(styles.text, styles.text_center)}>
            высококвалифицированных специалистов
          </p>
        </li>
        <li className={cn(styles.card)}>
          <h3 className={cn(styles.h3)}>28</h3>
          <p className={cn(styles.text, styles.text_center)}>широкая асортиментная линейка</p>
        </li>
        <li className={cn(styles.card)}>
          <h3 className={cn(styles.h3)}>100</h3>
          <p className={cn(styles.text, styles.text_center)}>реализованных проектов</p>
        </li>
      </ul>
    </Section>
  );
};

export default withLayout(Hello);
