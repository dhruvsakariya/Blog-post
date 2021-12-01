import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/dist/next-server/lib/head";
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dhruv's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredposts = getFeaturedPosts();

  return {
    props: {
      posts: featuredposts,
    },
  };
}

export default HomePage;
