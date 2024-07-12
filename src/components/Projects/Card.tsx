
import styles from "./style.module.scss"
import Link from "next/link"
interface PortfolioCardProps {
  photoId: string;
  type: string;
   techStack: [];
   feaure: [];
  title: string;
  description: string;
  cardHeight:string;
  cardSpan?:string,
  _id:string
  }
  import { convertToPic } from "@/helpers/picture";

const Card: React.FC<PortfolioCardProps> = ({title,_id, photoId,type, cardSpan, cardHeight }) => (
    <Link href={`/project/${_id}`} className={`${styles["__sec-wrapper"]} ${cardSpan && cardSpan} h-[${cardHeight}px]`}>
        <img src={convertToPic(photoId)} className="h-[100%] w-[100%] object-cover" alt={title} />
        <div className={`${styles["__slide"]} z-[1] flex flex-col px-[20px] py-[20px] gap-[10px]`}>
          <h4 className="text-[#fff]">{title}</h4>
          <div className="flex items-center gap-[20px]">
            <div className="bg-[var(--color-primary)] h-[1px] w-[50px]"></div>
            <p className="text-[var(--body-color)] text-[16px] font-primary capitalize">{type}</p>
          </div>
        </div>
   
    </Link>
  );

  export default Card