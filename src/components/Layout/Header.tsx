import { useMediaQuery } from 'react-responsive';
import DesktopMenu from './DesktopMenu';
import styles from './header.module.scss';
import MobileMenu from './MobileMenu';

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)"})

  return (
    <div className={styles.header}>
      <div className={styles.logo}>Dan's Web Tools</div>
      {
        isMobile ? <MobileMenu /> : <DesktopMenu />}
    </div>
  )
}

export default Header;

// Start Responsive Development