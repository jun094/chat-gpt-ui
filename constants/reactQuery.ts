import { QueryClient } from '@tanstack/react-query';

export const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: 1,
      staleTime: 1000 * 60 * 2, // 2 min
    },
  },
});
