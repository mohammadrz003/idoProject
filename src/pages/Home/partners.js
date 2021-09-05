import { PartnerList } from "./style/partnerList";

const Partners = () => {
  return (
    <div className="dark:bg-darkMode-600 dark:text-white text-center pt-8 pb-20">
      <div className="container mx-auto px-4 xl:px-28 flex flex-col md:flex-row md:justify-center items-center space-y-12 md:space-y-0 md:space-x-9">
        {PartnerList.map((item) => {
          return <span className="inline-block w-3/6 lg:w-1/6">{item}</span>;
        })}
      </div>
    </div>
  );
};

export default Partners;
