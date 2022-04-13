import styles from './Header.module.css';
import { IHeader } from './Header.props';
import { Button, Htag } from '../../components/index';
import cn from 'classnames';

export const Header = ({ children }: IHeader): JSX.Element => {
  return (
    <header className={cn(styles.header)}>
      <div className={styles.info}>
        <img
          src="./logo-original.svg"
          alt="Логотип компании Магеллан Энерджи"
          className={cn(styles.logo)}
        />
        <div className={cn(styles.contacts)}>
          <div className={cn(styles.contacts_container)}>
            <p className={cn(styles.contacts_mail)}>
              <a href="mailto:pkotofffff@yandex.ru" className={cn(styles.link_mail)}>
                pkotofffff@yandex.ru
              </a>
            </p>
            <p className={cn(styles.contacts_tel)}>
              <a href="tel:+79210310293" className={cn(styles.link_tel)}>
                Позвоните мне
              </a>
            </p>
          </div>
          <Button view="simple">Заказать</Button>
        </div>
      </div>
      <div className={cn(styles.container)}>
        <nav className={cn(styles.nav)}>
          <p className={cn(styles.nav_p)}>Первая ссылка</p>
          <p className={cn(styles.nav_p)}>Вторая ссылка</p>
          <p className={cn(styles.nav_p)}>Третья ссылка</p>
          <p className={cn(styles.nav_p)}>Четвертая ссылка</p>
        </nav>
      </div>
      <div className={cn(styles.background)}>
        <Htag tag="h1" colorWith={true} className={styles.h1}>
          Производим и поставляем электрооборудование по всей России
        </Htag>
      </div>
    </header>
  );
};
