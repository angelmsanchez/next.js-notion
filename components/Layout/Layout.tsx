import Head from 'next/head';
import Link from 'next/link';

import styles from '../../styles/Home.module.css';

interface Props {
  children: any;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <header>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/generate-static-pages">
              <a>GenerateStaticPages</a>
            </Link>
          </li>
          <li>
            <Link href="/recipes">
              <a>Recipes</a>
            </Link>
          </li>
        </ul>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;
