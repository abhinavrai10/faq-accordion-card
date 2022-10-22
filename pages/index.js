import Card from "../components/Card"
import ImageContainer from "../components/ImageContainer"
import Accordion from "../components/Accordion"
import Head from 'next/head'


export default function Home() {
  return (
    <main className="container">
      <Head>
        <title>Frontend Mentor | FAQ Accordion Card</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Card>
          <ImageContainer/>
          <Accordion/>
      </Card>
     </main>
  )
}
