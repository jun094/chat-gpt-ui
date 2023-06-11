import axios from 'axios';

import { API_URL } from '@/constants/common';

const getGptAnswer = async (question: string) => {
  const { data } = await axios.get(`${API_URL}/gpt?${question}`);
  const { answer } = data[0];

  return answer;
};

export { getGptAnswer };
