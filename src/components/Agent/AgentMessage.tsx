import { Message } from '@/types';
import { getMessageText } from '@/utils/message';
import { UpdateIcon } from '@radix-ui/react-icons';
import { FC, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { translate } from '../../utils/translate';
=======
=======
>>>>>>> ae1b6f2 (Revert ":globe_with_meridians: :flags: i18n integration")
=======
import { translate } from '../../utils/translate';
>>>>>>> 403332a (Revert "Revert ":globe_with_meridians: :flags: i18n integration"")
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
<<<<<<< HEAD
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
<<<<<<< HEAD
>>>>>>> f3af6f5 (Display search logs in the execution results)
=======
import { AgentCollapsible } from './AgentCollapsible';
>>>>>>> a405a0c (Add collapsible)
=======
import {
  oneLight,
  vscDarkPlus,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { AgentCollapsible } from './AgentCollapsible';
import { useTheme } from 'next-themes';
>>>>>>> 4c6919b (Use collapsible)

interface AgentMessageProps {
  message: Message;
}

const AgentMessage: FC<AgentMessageProps> = ({ message }) => {
  const simpleTitle = message.title?.split('(')[0] ?? ''; // ex: 'Creating tasks... (*This process takes time. Please wait...*)'
  const { theme, systemTheme } = useTheme();
  const [highlightStyle, setHighlightStyle] = useState(oneLight);

  useEffect(() => {
    const isDark =
      theme === 'system' ? systemTheme === 'dark' : theme === 'dark';
    const style = isDark ? vscDarkPlus : oneLight;
    setHighlightStyle(style);
  }, [theme, systemTheme]);

  const contents = (
    <div className="prose dark:prose-invert prose-pre:bg-neutral-200 prose-pre:text-black dark:prose-pre:bg-neutral-800 dark:prose-pre:text-white">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, style, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                style={highlightStyle}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {getMessageText(message)}
      </ReactMarkdown>
    </div>
  );

  return (
    <div
      className={`border-b border-black/10 text-gray-800 dark:border-gray-900/50 dark:text-gray-100 ${message.bgColor}`}
    >
      <div className="relative m-auto flex gap-4 p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-2xl lg:px-0 xl:max-w-3xl">
        {message.type === 'loading' ? (
          <div className="w-10 pt-1.5">
            <UpdateIcon className="animate-spin" />
          </div>
        ) : (
          <div className="w-10 pt-0.5 text-xl">{message.icon}</div>
        )}
        {message.type === 'session-summary' ? (
          <details>
<<<<<<< HEAD
<<<<<<< HEAD
            <summary className="pt-0.5 text-lg font-bold">
              {translate("SUMMARY", "common")}
            </summary>
=======
            <summary className="pt-0.5 text-lg font-bold">Summary</summary>
>>>>>>> ae1b6f2 (Revert ":globe_with_meridians: :flags: i18n integration")
=======
            <summary className="pt-0.5 text-lg font-bold">
              {translate('SUMMARY')}
            </summary>
>>>>>>> 403332a (Revert "Revert ":globe_with_meridians: :flags: i18n integration"")
            {contents}
          </details>
        ) : message.status?.type === 'creating-stream' ||
          message.status?.type === 'executing-stream' ? (
          <AgentCollapsible title={simpleTitle}>{contents}</AgentCollapsible>
        ) : (
          contents
        )}
      </div>
    </div>
  );
};

export default AgentMessage;
