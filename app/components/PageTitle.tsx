import bgPage from "@/public/img/details_page.jpg";
interface PageTitleProps {
  title: string;
}
const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div
      className="mt-20 w-full h-[200px] bg-lumiaPrimary-600 relative bg-cover bg-center"
      style={{ backgroundImage: `url('${bgPage.src}')` }}
    >
      <div className=" text-white overlay bg-lumiaPrimary-400 w-full h-[200px] flex items-center justify-center font-bold">
        <h1 className="text-4xl uppercase">{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
