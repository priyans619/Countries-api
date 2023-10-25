import Col from "react-bootstrap//Col";
import { motion } from 'framer-motion';
import style from "styles/singlecountry.module.scss";

export default function DetailsTwo({detailsTwo}) {
    
    const {tld, currencies, languages } = detailsTwo;

    return(
        <col md={6} className={`${style.descCol2} pt-5`}>
        <motion.p
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5, delay: 3.5 }}
         className="country-key fs-7 fw-bold"
         >
            Top Level Domain:{" "}
          <span className="fs-6 country-value">{tld?.[0]}</span>
          
        </motion.p>
       
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.8 }}
          className="country-key fs-7 fw-bold"
        >
           Currencies:{" "}
           <span className="fs-6 country-value">
            {currencies ? currencies : "No Currencies"}
          </span>
          
        </motion.p>

        <motion.p
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5, delay: 4.1 }}
         className="country-key fs-7 fw-bold"
        >

        Languages:{" "}
        </motion.p>
       
        </col>
    );
    
}