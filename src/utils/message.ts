import { AgentStatus, Message, MessageType, ToolType } from '@/types';
import { translate } from './translate';

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
      ? translate('OBJECTIVE', 'message')
      : type === 'task-list'
      ? translate('TASK_LIST', 'message')
      : type === 'next-task'
      ? translate('NEXT_TASK', 'message')
      : type === 'task-result'
      ? translate('TASK_RESULT', 'message')
      : type === 'task-output'
      ? translate('TASK_OUTPUT', 'message')
      : type === 'task-result-summary'
      ? translate('TASK_RESULT_SUMMARY', 'message')
      : type === 'loading'
      ? translate('LOADING', 'message')
      : type === 'end-of-iterations'
      ? translate('END_OF_ITERATIONS', 'message')
      : type === 'session-summary'
<<<<<<< HEAD
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
=======
      ? translate('SESSION_SUMMARY', 'message')
      : type === 'search-logs'
<<<<<<< HEAD
      ? translate("SEARCH_LOGS", "message")
>>>>>>> 403332a (Revert "Revert ":globe_with_meridians: :flags: i18n integration"")
=======
      ? translate('SEARCH_LOGS', 'message')
>>>>>>> 2d7fe49 (Fix translate func)
      : type === 'done'
      ? translate('DONE', 'message')
      : type === 'complete'
      ? translate('FINISHED', 'message')
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
  if (
    message.status?.type === 'creating-stream' ||
    message.status?.type === 'executing-stream'
  ) {
    return message.text;
  }

  if (message.title) return `### ${message.title}\n\n ${message.text}`;

  return message.text;
};

export const loadingAgentMessage = (status: AgentStatus) => {
  let text =
    status.type === 'creating' || status.type === 'creating-stream'
      ? translate('CREATING', 'message')
      : status.type === 'executing' || status.type === 'executing-stream'
      ? translate('EXECUTING', 'message')
      : status.type === 'prioritizing'
<<<<<<< HEAD
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
=======
      ? translate('PRIORITIZING', 'message')
>>>>>>> 403332a (Revert "Revert ":globe_with_meridians: :flags: i18n integration"")
      : status.type === 'saving'
      ? translate('SAVING', 'message')
      : status.type === 'preparing'
      ? translate('PREPARING', 'message')
      : status.type === 'terminating'
      ? translate('TERMINATING', 'message')
      : status.type === 'updating'
      ? translate('UPDATING', 'message')
      : status.type === 'summarizing'
      ? translate('SUMMARIZING', 'message')
      : status.type === 'managing'
<<<<<<< HEAD
      ? '🗂️ Task management in progress... (🤖💬: *This process takes time. Please wait...*)'
      : 'Thinking...';
>>>>>>> ae1b6f2 (Revert ":globe_with_meridians: :flags: i18n integration")
=======
      ? translate('MANAGING', 'message')
      : translate('THINKING', 'message');
>>>>>>> 403332a (Revert "Revert ":globe_with_meridians: :flags: i18n integration"")

  let title = undefined;
  if (status.type === 'creating-stream' || status.type === 'executing-stream') {
    title = text;
    text = status.message ?? '';
  } else if (status.message) {
    text += `\n\n${status.message}`;
  }

  return {
    text: text,
    title: title,
    type: 'loading',
    bgColor: 'bg-gray-100 dark:bg-gray-600/10',
    status: status,
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
