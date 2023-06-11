import cn from 'classnames';

type ChatBubbleProps = {
  direction?: 'left' | 'right';
  children: React.ReactNode;
};

function ChatBubble({ direction = 'right', children }: ChatBubbleProps) {
  return (
    <div
      className={cn('flex', {
        'justify-start': direction === 'left',
        'justify-end': direction === 'right',
      })}
    >
      <div className="bg-white text-black p-4 rounded-lg shadow-lg w-[200px] ">
        <h6>{children}</h6>
      </div>
    </div>
  );
}

export default ChatBubble;
