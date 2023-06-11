import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryResult,
  UseMutationResult,
} from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants/reactQuery';
import { getChat, postChat } from './api';

import type { ChatItemType } from '@/types/chat.type';

/**
 * GET 대화 내역
 */
export const useGetChatList = (): UseQueryResult<ChatItemType[], Error> =>
  useQuery({
    queryKey: QUERY_KEY.chatList(),
    queryFn: getChat,
  });

/**
 * POST 질문
 */
export const usePostQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postChat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.chatList() });
    },
  });
};
