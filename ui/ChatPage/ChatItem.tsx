import ChatBubble from '@/components/ChatBubble';
import type { ChatItemType } from '@/types/chat.type';

type ChatItemProps = ChatItemType;

function ChatItem({ question, answer }: ChatItemProps) {
  return (
    <div className="flex flex-column m-4">
      <ChatBubble>{question}</ChatBubble>
      <ChatBubble>{answer}</ChatBubble>
    </div>
  );
}

export default ChatItem;
