import Head from 'next/head';
import Link from 'next/link';

import styles from '../../styles/Home.module.css';
import stylesLayout from '../../styles/Layout.module.scss';

interface Props {
  children: any;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <header className={stylesLayout.header}>
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
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;
