import styles from "./../../styles/orders.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBell,
  faSquare,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className={styles.topHeaders}>
      <div className={styles.appControls}>
        <div className={styles.circles}>
          <div className={styles.circles1}></div>
          <div className={styles.circles2}></div>
          <div
            className={styles.circles3}
            id={styles.headerControlsActive}
          ></div>
        </div>
        <div className={styles.circlesText}>
          <p className={styles.circlesText1}>closed</p>
          <p className={styles.circlesText2}>Buzy</p>
          <p className={styles.circlesText3}>Open</p>
        </div>
      </div>
      <div className={styles.payout}>
        <p className={styles.payoutP}>Payout</p>
        <p className={styles.payoutP}>0.00 OMR</p>
      </div>
      <div className={styles.belliconDiv}>
        <button>
          <FontAwesomeIcon icon={faBell} className="fa-2x" />
        </button>
        <button>
          <FontAwesomeIcon icon={faSquare} className="fa-2x" />
        </button>
      </div>
      <div className={styles.headerSearchDiv}>
        <div className={styles.headerSearchButtonDiv}>
          <button className={styles.headerSearchButton}>EN</button>
        </div>
        <div className={styles.headerSearchInputDiv}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.search} />
          <input
            className={styles.headerSearchInput}
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
