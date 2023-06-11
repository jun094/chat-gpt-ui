import { Suspense } from 'react';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';

import PageWrapper from '@/components/PageWrapper';

import ChatList from '@/ui/ChatPage/ChatList/ChatList';
import ChatListLoading from '@/ui/ChatPage/ChatList/ChatList.loading';
import ChatBottomForm from '@/ui/ChatPage/ChatBottomForm';

import { getGptAnswer } from '@/hooks/fetch/useFetchGpt/api';
import { useGetGptAnswer } from '@/hooks/fetch/useFetchGpt';
import { getChat } from '@/hooks/fetch/useFetchChat/api';

function ChatPage() {
  return (
    <PageWrapper>
      <PageWrapper.TopFixed>로고영역</PageWrapper.TopFixed>

      <PageWrapper.Contents>
        <Suspense fallback={<ChatListLoading />}>
          <ChatList />
        </Suspense>
      </PageWrapper.Contents>

      <PageWrapper.BottomFixed>
        <ChatBottomForm />
      </PageWrapper.BottomFixed>
    </PageWrapper>
  );
}

export default ChatPage;
