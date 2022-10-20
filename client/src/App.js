import './App.css';
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import MARKDOWN from './markdown.md';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeLodashTemplate from 'rehype-lodash-template';

function App() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(MARKDOWN)
      .then((res) => res.text())
      .then((md) => {
        setMarkdown(md)
      })
  }, []);

  const variables = {
    version: '1.1.1'
  }

  return (
    <div className="App">
      <ReactMarkdown children={markdown} rehypePlugins={[[rehypeLodashTemplate, { values: variables}]]} components={{
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
      }}/>
    </div>
  );
}

export default App;
