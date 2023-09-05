import { motion } from 'framer-motion';
import { useRouter } from "next/router";

export default function BorderCountries({borderCountries}) {
    const router = useRouter();
    const { borders } = borderCountries;

    return (
        
    
  <div className="pt-4">
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 4.4 }}
      className={`${
        borders && "d-flex flex-wrap align-items-center"
      } country-key fs-7 fw-bold`}
    >
       {borders ? (
            borders.map((border, index) => {
              const id = uuidv4();
              let delayValue = 4.4;
              index = index + 1; 
              delayValue = delayValue + 0.3 * index; 
            }  
    </motion.p>
    
  </div>
    );

}