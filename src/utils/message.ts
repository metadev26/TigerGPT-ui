import { AgentStatus, Message, MessageType, ToolType } from '@/types';

export const setupMessage = (
  type: MessageType,
  text: string,
  tool?: ToolType,
): Message => {
  const icon =
    type === 'objective'
      ? '🎯'
      : type === 'task-list'
      ? '📝'
      : type === 'next-task'
      ? '👉'
      : type === 'task-result' && tool === 'web-search'
      ? '🔍'
      : type === 'task-result' && tool === 'web-scrape'
      ? '📄'
      : type === 'task-result' && tool === 'text-completion'
      ? '🤖'
      : type === 'task-result'
      ? '✅'
      : type === 'task-result-summary'
      ? '📋'
      : type === 'search-logs'
      ? '🌐'
      : type === 'loading'
      ? '⏳'
      : type === 'end-of-iterations'
      ? '🏁'
      : type === 'session-summary'
      ? '📑'
      : type === 'done'
      ? '✅'
      : type === 'complete'
      ? '🏁'
      : type === 'task-output' && tool === 'web-search'
      ? '🔍'
      : type === 'task-output' && tool === 'web-scrape'
      ? '📄'
      : type === 'task-output' && tool === 'text-completion'
      ? '🤖'
      : '🤖';

  const title =
    type === 'objective'
      ? 'Objective'
      : type === 'task-list'
      ? 'Task List'
      : type === 'next-task'
      ? 'Next Task'
      : type === 'task-result'
      ? 'Task Result'
      : type === 'task-output'
      ? 'Task Output'
      : type === 'task-result-summary'
      ? 'Task Result Summary'
      : type === 'loading'
      ? 'Loading'
      : type === 'end-of-iterations'
      ? 'End of Iterations'
      : type === 'session-summary'
<<<<<<< HEAD
<<<<<<< HEAD
      ? translate('SESSION_SUMMARY', 'message')
=======
      ? 'Session Summary'
      : type === 'search-logs'
      ? 'Search Logs'
>>>>>>> f3af6f5 (Display search logs in the execution results)
=======
      ? 'Session Summary'
      : type === 'search-logs'
      ? 'Search Logs'
>>>>>>> ae1b6f2 (Revert ":globe_with_meridians: :flags: i18n integration")
      : type === 'done'
      ? 'Done'
      : type === 'complete'
      ? 'Finished'
      : '';

  const bgColor =
    type === 'loading'
      ? 'bg-gray-100 dark:bg-gray-600/10'
      : type === 'objective' || type === 'next-task'
      ? 'bg-white dark:bg-gray-600/50'
      : 'bg-gray-50 dark:bg-[#444654]';

  return {
    text: text,
    type: type,
    icon: icon,
    title: title,
    bgColor: bgColor,
  };
};

export const getMessageText = (message: Message): string => {
  if (message.title) return `### ${message.title}\n\n ${message.text}`;

  return message.text;
};

export const loadingAgentMessage = (status: AgentStatus) => {
  let text =
    status.type === 'creating'
      ? 'Creating tasks... (🤖💬: *This process takes time. Please wait...*)'
      : status.type === 'executing'
      ? '⚒️ Executing tasks...'
      : status.type === 'prioritizing'
<<<<<<< HEAD
      ? translate("PRIORITIZING", "message")
      : status.type === 'saving'
      ? translate("SAVING", "message")
      : status.type === 'preparing'
      ? translate("PREPARING", "message")
      : status.type === 'terminating'
      ? translate("TERMINATING", "message")
      : status.type === 'updating'
      ? translate("UPDATING", "message")
      : status.type === 'summarizing'
      ? translate("SUMMARIZING", "message")
      : status.type === 'managing'
      ? translate('MANAGING', 'message')
      : translate("THINKING", "message");
=======
      ? 'Prioritizing tasks...'
      : status.type === 'saving'
      ? 'Saving tasks...'
      : status.type === 'preparing'
      ? 'Preparing...'
      : status.type === 'terminating'
      ? 'Terminating...'
      : status.type === 'updating'
      ? '♻️ Task Updating...'
      : status.type === 'summarizing'
      ? '✍️ Summarizing...'
      : status.type === 'managing'
      ? '🗂️ Task management in progress... (🤖💬: *This process takes time. Please wait...*)'
      : 'Thinking...';
>>>>>>> ae1b6f2 (Revert ":globe_with_meridians: :flags: i18n integration")

  if (status.message) text += `\n\n${status.message}`;

  return {
    text: text,
    type: 'loading',
    bgColor: 'bg-gray-100 dark:bg-gray-600/10',
  } as Message;
};

export const getToolIcon = (tool: ToolType) => {
  switch (tool) {
    case 'web-search':
      return '🔍';
    case 'web-scrape':
      return '📄';
    case 'text-completion':
      return '🤖';
    default:
      return '🤖';
  }
};

export const getExportText = (messages: Message[]) => {
  const text = messages
    .map((message) => `## ${message.icon} ${message.title}\n${message.text}`)
    .join('\n\n');
  return text;
};
