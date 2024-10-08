import { ILinks } from "../../constants/Main/Linksofbenefits";

export interface ILayoutLinks {
  title: string;
  data: ILinks[];
}

const Collegues: React.FC<ILayoutLinks> = ({ title, data }) => {
  return (
    <div id="partnyorlarımız" className="flex flex-col w-full text-center items-center mb-24">
      <p className="text-4xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl font-semibold text-black my-6">{title}</p>
      <div className={`grid xl:grid-cols-4 w-1/2 justify-center items-center lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1  gap-10`}>
        {data.map((item: ILinks) => {
          return (
            <a 
            target="blank"
            aria-label={`the link of ${item.alt}`}
            key={item.id}
             className="col-span-1 flex items-center justify-center" 
            href={item.href}>
              <img
                src={item.src}
                className={`${
                  item.id == 1
                    ? "w-28 h-40 object-scale-down "
                    : "w-40 h-40 object-scale-down "
                }`}
                alt={'Əməkdaşlar bölməsinin linkləri'}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Collegues;
