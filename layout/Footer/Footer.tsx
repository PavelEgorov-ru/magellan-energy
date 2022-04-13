import styles from './Footer.module.css';
import { IFooter } from './Footer.props';
import cn from 'classnames';
import { Button } from '../../components';

export const Footer = ({ children }: IFooter): JSX.Element => {
  return (
    <footer className={cn(styles.footer)}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.container_left)}>
          <img
            src="./logo-white.svg"
            alt="логотип компании Магеллан Энерджи"
            className={cn(styles.logo)}
          />
          <div className={cn(styles.list)}>
            <p className={cn(styles.list__name)}>
              <a href="#" className={cn(styles.link)}>
                Производство
              </a>
            </p>
            <ul className={cn(styles.ul)}>
              <p className={cn(styles.p)}>КТП</p>
              <p className={cn(styles.p)}>БКТП</p>
              <p className={cn(styles.p)}>РП</p>
              <p className={cn(styles.p)}>ТП</p>
            </ul>
          </div>
          <div>
            <p className={cn(styles.list__name)}>
              <a href="#" className={cn(styles.link)}>
                Производство
              </a>
            </p>
            <ul className={cn(styles.ul)}>
              <p className={cn(styles.p)}>КТП</p>
              <p className={cn(styles.p)}>БКТП</p>
              <p className={cn(styles.p)}>РП</p>
              <p className={cn(styles.p)}>ТП</p>
            </ul>
          </div>
          <div>
            <p className={cn(styles.list__name)}>
              <a href="#" className={cn(styles.link)}>
                Производство
              </a>
            </p>
            <ul className={cn(styles.ul)}>
              <p className={cn(styles.p)}>КТП</p>
              <p className={cn(styles.p)}>БКТП</p>
              <p className={cn(styles.p)}>РП</p>
              <p className={cn(styles.p)}>ТП</p>
            </ul>
          </div>
        </div>
        <div className={cn(styles.container_right)}>
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
          <form className={cn(styles.form)}>
            <input type="tel" placeholder="ваш номер телефона" className={cn(styles.input)} />
            <Button view="form" className={cn(styles.button)}>
              Отправить
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};
