import styles from './Hello.module.css';
import { withLayout } from '../../layout/Layout';
import { Section, Htag, Button } from '../../components';
import Image from 'next/image';
import cn from 'classnames';
import imageProduct from '../../images/11.png';
import imageDoc from '../../images/sert1.jpg';

const Hello = (): JSX.Element => {
  return (
    <>
      <Section className={cn(styles.section)}>
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
        <ul className={cn(styles.about__cards)}>
          <li className={cn(styles.about__card)}>
            <h3 className={cn(styles.h3)}>15</h3>
            <p className={cn(styles.text, styles.text_center)}>лет на рынке энергетики</p>
          </li>
          <li className={cn(styles.about__card)}>
            <h3 className={cn(styles.h3)}>38</h3>
            <p className={cn(styles.text, styles.text_center)}>
              высококвалифицированных специалистов
            </p>
          </li>
          <li className={cn(styles.about__card)}>
            <h3 className={cn(styles.h3)}>28</h3>
            <p className={cn(styles.text, styles.text_center)}>широкая асортиментная линейка</p>
          </li>
          <li className={cn(styles.about__card)}>
            <h3 className={cn(styles.h3)}>100</h3>
            <p className={cn(styles.text, styles.text_center)}>реализованных проектов</p>
          </li>
        </ul>
      </Section>
      <Section className={cn(styles.section)}>
        <Htag tag="h2" className={cn(styles.about__h2)}>
          наша продукция и услуги
        </Htag>
        <div className={cn(styles.line)}></div>
        <div className={cn(styles.production__cards)}>
          <article className={cn(styles.production__card)}>
            <div className={cn(styles.production__image)}>
              <Image src={imageProduct} />
            </div>
            <h3 className={cn(styles.production__h3)}>тп, рп, ткп</h3>
            <ul className={cn(styles.production__list)}>
              <li className={cn(styles.production__text)}>Напряжение: 20/10(6)/0,4 кВ</li>
              <li className={cn(styles.production__text)}>Тип: бетонная, сендвич</li>
              <li className={cn(styles.production__text)}>Степень защиты: до IP 54</li>
            </ul>
            <Button view="cards" className={cn(styles.prod__btn)}>
              Подробнее
            </Button>
          </article>
          <article className={cn(styles.production__card)}>
            <div className={cn(styles.production__image)}>
              <Image src={imageProduct} />
            </div>
            <h3 className={cn(styles.production__h3)}>тп, рп, ткп</h3>
            <ul className={cn(styles.production__list)}>
              <li className={cn(styles.production__text)}>Напряжение: 20/10(6)/0,4 кВ</li>
              <li className={cn(styles.production__text)}>Тип: бетонная, сендвич</li>
              <li className={cn(styles.production__text)}>Степень защиты: до IP 54</li>
            </ul>
            <Button view="cards" className={cn(styles.prod__btn)}>
              Подробнее
            </Button>
          </article>
          <article className={cn(styles.production__card)}>
            <div className={cn(styles.production__image)}>
              <Image src={imageProduct} />
            </div>
            <h3 className={cn(styles.production__h3)}>тп, рп, ткп</h3>
            <ul className={cn(styles.production__list)}>
              <li className={cn(styles.production__text)}>Напряжение: 20/10(6)/0,4 кВ</li>
              <li className={cn(styles.production__text)}>Тип: бетонная, сендвич</li>
              <li className={cn(styles.production__text)}>Степень защиты: до IP 54</li>
            </ul>
            <Button view="cards" className={cn(styles.prod__btn)}>
              Подробнее
            </Button>
          </article>
        </div>
      </Section>
      <Section>
        <Htag tag="h2" className={cn(styles.about__h2)}>
          документация
        </Htag>
        <div className={cn(styles.line)}></div>
        <div className={cn(styles.documentacion__cards)}>
          <div className={styles.documentacion__image}>
            <Image src={imageDoc} layout="responsive"></Image>
          </div>
          <div className={styles.documentacion__image}>
            <Image src={imageDoc} layout="responsive"></Image>
          </div>
          <div className={styles.documentacion__image}>
            <Image src={imageDoc} layout="responsive"></Image>
          </div>
        </div>
      </Section>
    </>
  );
};

export default withLayout(Hello);
