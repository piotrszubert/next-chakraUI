import Head from 'next/head'
import Navbar from '@/components/Navbar'
import PostsList from '@/components/PostList'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main style={{"padding": "0 20px"}}>
       <PostsList/>
      </main>
    </>
  )
}
