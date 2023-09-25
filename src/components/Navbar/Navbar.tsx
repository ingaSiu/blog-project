import { Link } from 'react-router-dom';
import { LinksProps } from '../../layouts/MainLayout';
import MobileMenu from '../MobileMenu/MobileMenu';
import logo from '../../../public/cat_icon.png';
import styles from './Navbar.module.scss';

type NavbarProps = {
  links: LinksProps[];
  homeLink: string;
};

const Navbar = ({ links, homeLink }: NavbarProps) => {
  return (
    <>
      <div className={styles.navWrapper}>
        {/* // logo for mobile */}
        <Link to={homeLink}>
          <img className={styles.smallLogo} src={logo} alt="Small logo" width={60} />
        </Link>

        <Link to={homeLink}>
          <div className={styles.bigLogo}>
            <div className={styles.logoWrapper}>
              <img src={logo} alt="Logo" />
            </div>

            <p className={styles.blogTitle}>Nekotastic Blog</p>
          </div>
        </Link>

        <div className={styles.navLinksWapper}>
          {links.map((item) => (
            <Link key={item.path} to={item.path} className={styles.navbarLink}>
              {item.title}
            </Link>
          ))}
        </div>

        <MobileMenu links={links} />
      </div>
    </>
  );
};

export default Navbar;
