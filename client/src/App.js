import './App.css';
import ReactMarkdown from 'react-markdown';
import remarkMdx from "remark-mdx";
import rehypeLodashTemplate from 'rehype-lodash-template'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useEffect, useState} from "react";
import README from './markdown.md';
import remarkGfm from 'remark-gfm'
// import rehypeRaw from 'rehype-raw'
// import rehypeReact from 'rehype-react'

function App() {
  const [markdown, setMarkdown] = useState('');
  const text = 'text variable';

  const values = {
    variable: 'my replaced text'
  }

  useEffect(() => {
    fetch(README)
      .then((res) => res.text())
      .then((md) => {
        setMarkdown(md)
      })
  }, [])

//   const markdown = `Here is some JavaScript code:
//
// ~~~js
// console.log('It works!')
// ~~~
// `


  return (
    <div className="App">
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        // rehypePlugins={[rehypeReact]}
        components={{
          code: function code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
    </div>
  );
}

export default App;
