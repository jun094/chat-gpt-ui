import axios from 'axios';

import { API_URL } from '@/constants/common';

import type { ChatItemType } from '@/types/chat.type';

const getChat = async () => {
  const { data } = await axios.get(`${API_URL}/chat`);
  return data;
};

const postChat = async ({
  question,
  answer,
}: Pick<ChatItemType, 'question' | 'answer'>) => {
  const { data } = await axios.post(`${API_URL}/chat`, {
    question,
    answer,
  });
  return data;
};

export { getChat, postChat };
