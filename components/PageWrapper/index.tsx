import PageTitle from './PageTitle';
import PageTopFixed from './PageTopFixed';
import PageBottomFixed from './PageBottomFixed';
import PageContents from './PageContents';

type PageWrapperProps = {
  children: React.ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main className="relative flex flex-col items-center bg-slate-200 w-[575px] h-[1000px] mx-auto my-0">
      {children}
    </main>
  );
}

PageWrapper.Title = PageTitle;
PageWrapper.TopFixed = PageTopFixed;
PageWrapper.BottomFixed = PageBottomFixed;
PageWrapper.Contents = PageContents;

export default PageWrapper;
