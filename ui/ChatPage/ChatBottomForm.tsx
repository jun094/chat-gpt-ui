import { useState, useRef } from 'react';

import Button from '@/components/Button';
import { usePostQuestion } from '@/hooks/fetch/useFetchChat';
import { useGetGptAnswer } from '@/hooks/fetch/useFetchGpt';

import type { ChatItemType } from '@/types/chat.type';

export default function ChatBottomForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [question, setQuestion] = useState<string>('');

  const { refetch } = useGetGptAnswer(question, false);
  const { mutate } = usePostQuestion();
  const isDisabledForm = false;
  // const isDisabledForm = status === 'loading'; // 첫 렌더링시, isLoading = true 이므로, status 사용

  const handleQuestionButton = async () => {
    if (!inputRef?.current) return;

    const question = inputRef.current?.value || '';

    // mutate({
    //   question,
    // });

    await refetch();
    inputRef.current.value = '';
  };

  return (
    <div className="flex w-full">
      <input
        type="text"
        ref={typeof window !== 'undefined' ? inputRef : null}
        placeholder="채팅 입력"
        className="flex-1"
        disabled={isDisabledForm}
      />
      <Button disabled={isDisabledForm} onClick={handleQuestionButton}>
        질문하기
      </Button>
    </div>
  );
}
