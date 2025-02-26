// Updated Header.jsx
import Image from "next/image";
import styles from './Landing.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        {/* Use absolute path with public folder reference */}
        <Image
          src="/Group 24.svg" // Add leading slash to reference from public directory
          alt="logo"
          width={46.5}
          height={55}
          className={styles.logo}
          priority // Add priority to load the image sooner
        />
      </div>
      <div className={styles.associationWrapper}>
        <div className={`${styles.associationText} font-rusoile`}>
          CiviL Engineering association presents
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <p className={styles.prithvi}>PRITHVI'25</p>
      </div>
    </div>
  );
};

export default Header;