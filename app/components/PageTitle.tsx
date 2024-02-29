import bgPage from "@/public/img/details_page.jpg";
interface PageTitleProps {
  title: string;
}
const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div
      className="mt-20 w-full h-[100px] sm:h-[200px] bg-lumiaPrimary-600 relative bg-cover bg-center"
      style={{ backgroundImage: `url('${bgPage.src}')` }}
    >
      <div className=" text-black overlay  w-full h-[100px] sm:h-[200px] flex items-center justify-center font-bold">
        <h1 className="sm:text-4xl text-xl uppercase">{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
