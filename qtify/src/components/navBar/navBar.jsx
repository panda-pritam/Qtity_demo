import Logo from "../logo/logo";
import Box from "@mui/system/Box";
import SearchBox from "../searchBox/searchBar";
import styles from "./NavBar.module.css";
export default function NavBar() {
  return (
    <nav className={styles.navbarContainer}>
      <Logo />
      <SearchBox />
      <button className={styles.feedback_button}>Give feedback</button>
    </nav>
  );
}
