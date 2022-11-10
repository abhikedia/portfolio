import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import Image from "next/image";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div id={styles.skills}>
      <div className="header">
        <DashedHeading text="Tech Involvement" />
        <span className="header-text">My Skillset</span>
      </div>
      <div className={styles.techIcons}>
        <Image src="/icons/react.png" width={130} height={130} />
        <Image
          src="/icons/nextjs.png"
          width={150}
          height={80}
          className={styles.padding}
        />
        <Image src="/icons/node.png" width={130} height={130} />
        <Image src="/icons/git.png" width={130} height={130} />
        <Image src="/icons/gitHub.png" width={130} height={130} />
        <Image src="/icons/sql.png" width={130} height={130} />
        <Image src="/icons/ethereum.png" width={130} height={130} />
        <Image src="/icons/tezos.png" width={130} height={130} />
      </div>
    </div>
  );
};

export default Skills;