import styles from './Header.module.css';
import { IHeader } from './Header.props';
import { Button, Htag } from '../../components/index';
import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';

export const Header = ({ children }: IHeader): JSX.Element => {
  const router = useRouter();
  console.log(router.pathname);

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
          <Button view="simple" className={styles.button}>
            ЗАКАЗАТЬ
          </Button>
        </div>
      </div>
      <div className={cn(styles.container)}>
        <nav className={cn(styles.nav)}>
          <Link href="/production">
            <a>
              <p
                className={cn(styles.nav_p, {
                  [styles.nav_p_active]: router.pathname == '/production',
                })}
              >
                ПРОИЗВОДСТВО
              </p>
            </a>
          </Link>
          <Link href="/decision">
            <a>
              <p
                className={cn(styles.nav_p, {
                  [styles.nav_p_active]: router.pathname == '/decision',
                })}
              >
                РЕШЕНИЯ
              </p>
            </a>
          </Link>
          <Link href="/services">
            <a>
              <p
                className={cn(styles.nav_p, {
                  [styles.nav_p_active]: router.pathname == '/services',
                })}
              >
                УСЛУГИ
              </p>
            </a>
          </Link>
          <Link href="/documentation">
            <a>
              <p
                className={cn(styles.nav_p, {
                  [styles.nav_p_active]: router.pathname == '/documentation',
                })}
              >
                ДОКУМЕНТАЦИЯ
              </p>
            </a>
          </Link>
          <Link href="/contacts">
            <a>
              <p
                className={cn(styles.nav_p, {
                  [styles.nav_p_active]: router.pathname == '/contacts',
                })}
              >
                КОНТАКТЫ
              </p>
            </a>
          </Link>
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
