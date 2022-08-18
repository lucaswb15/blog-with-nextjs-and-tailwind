import Head from 'next/head';
import Link from 'next/Link';
import { format, parseISO } from 'date-fns';
import { getAllPosts } from '../lib/data';

export default function Home({ posts }) {
  return (
    <div className='flex justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      <Head>
        <title>Milk Equity</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-4 p-4 mx-auto pt-20 w-10/12">
        {posts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  };
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="border border-gray-100 shadow hover:shadow-md hover:border-gray-300 rounded-md p-4 transition duration-200 ease-inn ">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className='font-bold'>{title}</a>
        </Link>
      </div>
      <div className="text-gray-600 text-xs">
        {format(parseISO(date), 'MMMM do, uuu')}
      </div>
      <div>{content.substr(0, 300)}</div>
    </div>
  );
}
