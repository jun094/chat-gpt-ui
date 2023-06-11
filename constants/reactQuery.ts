export const QUERY_CLIENT_OPTIONS = {
  defaultOptions: {
    queries: {
      suspense: true,
      retry: 1,
      staleTime: 1000 * 60 * 2, // 2 min
    },
  },
};

export const QUERY_KEY = {
  all: ['all'] as const,
  chatList: () => [...QUERY_KEY.all, 'chat-list'] as const,
  gptAnaswer: () => [...QUERY_KEY.all, 'gpt-answer'] as const,
};
