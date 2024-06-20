
import Link from "next/link";
import styles from "./styles.module.scss"
import { convertToPic } from "@/helpers/picture";
interface PortfolioCardProps {
  photoId: string;
  type: string;
   techStack: [];
   feaure: [];
  title: string;
  description: string;
  cardHeight:string;
  cardSpan:string,
  _id:string
  }

const PortfolioCard: React.FC<PortfolioCardProps> = ({photoId,cardHeight, _id, type,cardSpan, techStack,feaure,title,description}) => {
  console.log("photoId",photoId)
    return <div className={`${styles["__sec-wrapper"]} ${cardSpan}  h-[${cardHeight}px]`}>
      <Link href={`/project/${_id}`}>
        <img src={convertToPic(photoId)} className="h-[100%] w-[100%] object-cover" alt={title} />
        <div className={`${styles["__slide"]} flex flex-col px-[20px] py-[20px] gap-[10px]`}>
          <h4 className="text-[#fff]">{title}</h4>
          <div className="flex items-center gap-[20px]">
            <div className="bg-[var(--color-primary)] h-[1px] w-[50px]"></div>
            <p className="text-[var(--body-color)] text-[16px] font-primary capitalize">{type}</p>
          </div>
        </div>
      </Link>
    </div>
}

  export default PortfolioCard