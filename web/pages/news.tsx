import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image";
import { IGeneral, IPost } from '../types';
import Layout from '../components/Layout';
import Moment from 'react-moment';
import 'moment/locale/fr';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps() {
  const res = await fetch(`${URL}/api/posts?populate=*`);
  const { data: posts } = await res.json();

  const res3 = await fetch(`${URL}/api/general?populate=*`);
  const { data: general } = await res3.json();

  return {
    props: { posts, general }
  }
}

type IProps = {
  posts: IPost[],
  general: IGeneral,
}

const News: NextPage<IProps> = ({ posts, general }: IProps) => {
  return (
    <Layout general={general}>
      <div>
        <Head>
          <title>{general?.attributes.metaTitle}</title>
          <meta
            name="description"
            content={general?.attributes.metaDescription}
          />
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
                    <Image src={`${URL}${post.attributes.image?.data.attributes.url}`} alt="Vignette" height="500rem" width="100%" />
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

export default News
