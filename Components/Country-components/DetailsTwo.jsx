import Col from "react-bootstrap//Col";
import { motion } from 'framer-motion';
import style from "styles/singlecountry.module.scss";

export default function DetailsTwo({detailsTwo}) {
    
    const {tld, currencies, languages } = detailsTwo;

    return(
        <col md={6} className={`${style.descCol2} pt-5`}>
        <motion.p>
          className="country-key fs-7 fw-bold"
        </motion.p>
       
       
       
        </col>
    );
    
}