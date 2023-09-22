import { Link } from 'react-router-dom';
import logo from '../../../public/cat_icon.png';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <>
      <div className={styles.navWrapper}>
        {/* // logo for mobile */}
        <Link to={'/'}>
          <img className={styles.smallLogo} src={logo} alt="Small logo" />
        </Link>

        <div className={styles.bigLogo}>
          <Link to={'/'}>
            <img src={logo} alt="Logo" />
            <p className={styles.blogTitle}>Nekotastic Blog</p>
          </Link>
        </div>

        <div className={styles.navLinks}>
          <a href="/">Recipes</a>
          <a href="#">Blog</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
