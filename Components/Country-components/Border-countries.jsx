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
        Border Countries:
        {borders ? (
          borders.map((border, index) => {
            const id = uuidv4();
            let delayValue = 4.4; 
            index = index + 1; 
            delayValue = delayValue + 0.3 * index; 

            return (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileTap={{ scale: 1.3 }}
                transition={{ duration: 0.5, delay: `${delayValue}` }}
                key={id}
                onClick={() => router.push(`/${border}`)}
                className={`${styles.cursorPointer} inline-block rounded fs-6 country-value border px-2 py-1 shadow-sm ms-1 my-1`}
              >
                {border}
              </motion.span>
            );
          })
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0, delay: 0 }}
            className="country-value fs-6 text-light-blue ms-1 fw-bold"
          >
            None
          </motion.span>
        )}
      </motion.p>
    </div>
  );
}