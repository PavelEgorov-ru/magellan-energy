import cn from 'classnames';
import { Htag, Section } from '../components';
import { withLayout } from '../layout/Layout';
import styles from './Home.module.css';

function Home() {
  return (
    <Section className={cn(styles.about)} style={{ border: '1px solid red' }}>
      <Htag tag="h2" className={cn(styles.about__h2)}>
        о нас
      </Htag>
    </Section>
  );
}

export default withLayout(Home);
