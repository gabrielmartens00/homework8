import Head from 'next/head';
import Link from 'next/link';
import styles from "../styles/Home.module.css"
import GitHub from '../components/GitHub';
import Counter from '../components/Counter';

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
            <title>Gabriel Martens</title>
            <link rel="icon" href="/favicon.ico"></link>
        </Head>
        <h1 className={styles.title}>
          Gabriel Martens welcomes <a href="https://nextjs.org">Next.js!</a>
        </h1>
       
        <Counter name={"Pablo"} mult={1} size={2}/>
        <Counter name={"Pia"} mult={2} size={0.5}/>
       
        <hr style={{ width: '80%', marginTop: '1em' }} />
       
       <GitHub />
       
        <hr style={{ width: '80%', marginTop: '1em' }} />
        <p>
          Check out my <Link href="/store">Fake Store</Link>.
        </p>
      </div>
  );
}
