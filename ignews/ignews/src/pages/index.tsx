import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ig-/News</title>
      </Head>

      <main>
        <section>
          <span> Hey welcome</span>
          <h1>News about the < span>React</span> World. </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding"/>
      </main>
      <h1 >hello word</h1>
    </>
  );
}
