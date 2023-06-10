// MOCK Data
let data = [
  { id: 1, question: '심리 상담 받고 싶어', answer: '고민이 뭐니?' },
  {
    id: 2,
    question: '개발을 잘 하고 싶어',
    answer: '개발 공부 잘 하려면 공부를 해야 돼',
  },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    // GET 요청 처리
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    // POST 요청 처리
    const { question } = req.body;

    // 새로운 원소 생성
    const newItem = {
      id: data.length + 1,
      question,
      answer: 'DB에 저장된 ChatGPT 응답 결과 노출...',
    };

    // 배열에 원소 추가
    data = [...data, newItem];

    // 추가된 원소 반환
    res.status(200).json(newItem);
  } else {
    // GET과 POST 이외의 요청은 허용되지 않음
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
