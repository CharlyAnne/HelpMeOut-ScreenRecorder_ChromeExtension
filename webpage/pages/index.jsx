import Head from 'next/head';
import Hero from '../components/Landingpage/Hero';
import Features from '../components/Landingpage/Features';
import Demo from '../components/Landingpage/Demo';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Help me out</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="divide-y-[60px] divide-[#F4F6F8] ">
          <Hero />
          <Features />
          <Demo />
        </section>
      </Layout>
    </div>
  );
}
