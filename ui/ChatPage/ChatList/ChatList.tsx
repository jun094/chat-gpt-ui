import { useGetChatList } from '@/hooks/fetch/useFetchChat';
import { useGetGptAnswer } from '@/hooks/fetch/useFetchGpt';

import type { ChatItemType } from '@/types/chat.type';
import ChatItem from '../ChatItem';

function ChatList() {
  /**
   * Suspense에 의해 Data는 항상 존재한다고 보장.
   */
  const { data = [] } = useGetChatList();
  const { data: answer } = useGetGptAnswer('', false);

  return (
    <div className="flex flex-col overflow-auto">
      {data.map(({ id, question, answer }: ChatItemType) => (
        <div key={id}>
          <ChatItem question={question} answer={answer} />
        </div>
      ))}
      chatGpt답변: {answer}
    </div>
  );
}

export default ChatList;
