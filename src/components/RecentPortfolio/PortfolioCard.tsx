
import styles from "./styles.module.scss"
interface PortfolioCardProps {
    src: { src: string };
    title: string;
    description: string;
    span?: string;
    cardHeight:string
  }

const PortfolioCard: React.FC<PortfolioCardProps> = ({src,title,description,span, cardHeight }) => (
    <div className={`${styles["__sec-wrapper"]} ${span && span} h-[${cardHeight}px]`}>
      <a href="#">
        <img src={src.src} className="h-[100%] w-[100%] object-cover" alt={title} />
        <div className={`${styles["__slide"]} flex flex-col px-[20px] py-[20px] gap-[10px]`}>
          <h4 className="text-[#fff]">{title}</h4>
          <div className="flex items-center gap-[20px]">
            <div className="bg-[var(--color-primary)] h-[1px] w-[50px]"></div>
            <p className="text-[var(--body-color)] text-[16px] font-primary capitalize">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );

  export default PortfolioCard