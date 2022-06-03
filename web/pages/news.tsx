import type { NextPage } from 'next'
import Head from 'next/head'
import { IHome, IPost } from '../types';
import Layout from '../components/Layout';
import Moment from 'react-moment';
//import 'moment/locale/fr';

type IProps = {
  posts: IPost[],
  home: IHome,
}
const Home: NextPage<IProps> = ({ posts, home }: IProps) => {
  return (
    <Layout home={home}>
      <div>
        <Head>
          <title>Moonalps Festival</title>
          <meta name="description" content="Moonalps Festival à Bursins, Suisse" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="w-full flex flex-col p-4">

          <h1>News</h1>
          <div className="flex flex-col gap-2 justify-center mt-4">
            {posts.map((post, i) =>
              <div key={i} className="w-full border border-gray-500 p-4">
                <div>
                  <p className="text-xl font-bold mb-2">{post.attributes.title}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <img src={`http://127.0.0.1:1337${post.attributes.image?.data.attributes.url}`} className="w-full" />
                  </div>
                  <div className="col-span-2">
                    <p>{post.attributes.content}</p>
                    <p className="italic text-xs mt-4">
                      <Moment format="LLLL">
                        {post?.attributes.publishedAt}
                      </Moment>
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </Layout >
  )
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:1337/api/posts?populate=*");
  const { data: posts } = await res.json();

  const res3 = await fetch("http://127.0.0.1:1337/api/home?populate=*");
  const { data: home } = await res3.json();

  return {
    props: { posts, home }
  }
}

export default Home
