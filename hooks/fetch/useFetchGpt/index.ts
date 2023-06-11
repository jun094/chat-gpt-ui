import { useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants/reactQuery';
import { getGptAnswer } from './api';

/**
 * GET ChatGPT 답변
 */
export const useGetGptAnswer = (question: string, enabled: boolean) =>
  useQuery({
    queryKey: QUERY_KEY.gptAnaswer(),
    queryFn: () => getGptAnswer(question),
    enabled,
  });
