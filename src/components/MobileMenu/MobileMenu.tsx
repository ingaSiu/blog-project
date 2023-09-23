import { useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { LinksProps } from '../../layouts/MainLayout';
import closeIcon from '../../../public/close.svg';
import menuIcon from '../../../public/menu.svg';
import styles from './MobileMenu.module.scss';

type MobeliMenuProps = {
  links: LinksProps[];
};

const MobileMenu = ({ links }: MobeliMenuProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setIsOpened((prev) => !prev);
    menuRef.current?.classList.toggle(styles.active);
  };
  return (
    <>
      <div ref={menuRef} className={styles.slidingMenu}>
        <div className={styles.menuNav}>
          {links.map((item) => (
            <Link key={item.path} to={item.path} className={styles.mobileLink}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div onClick={handleClick} className={styles.menuWrapper}>
        {isOpened ? (
          <img src={closeIcon} alt="Close menu icon" width={19} height={16} />
        ) : (
          <img src={menuIcon} alt="Open menu icon" width={19} height={16} />
        )}
      </div>
    </>
  );
};

export default MobileMenu;
