import Link from 'next/link';

import Button from '@/components/Button';
import PageWrapper from '@/components/PageWrapper';

function HomePage() {
  return (
    <PageWrapper>
      <PageWrapper.Contents>
        <PageWrapper.Title>여기는 렌딩페이지입니다.</PageWrapper.Title>
      </PageWrapper.Contents>

      <PageWrapper.BottomFixed>
        <Link href="/chat" className="w-full flex">
          <Button className="flex-1">상담받기</Button>
        </Link>
      </PageWrapper.BottomFixed>
    </PageWrapper>
  );
}

export default HomePage;
