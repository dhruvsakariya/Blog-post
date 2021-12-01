import React from "react";
import styles from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import  atomDark  from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    image(img) {
      return (
        <div className={styles.image}>
          <Image
            src={`/images/posts/${post.slug}/${img.src}`}
            alt={img.alt}
            width={600}
            height={300}
            draggable={false}
          />
        </div>
      );
    },
    code(code) {
      const { language, value } = code;
      return (
        <div>
          <SyntaxHighlighter
            style={atomDark}
            language={language}
            children={value}
          />
        </div>
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
