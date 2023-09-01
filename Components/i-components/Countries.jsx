import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useRouter } from "next/router";



export default function Countries({countries}) {
  const router = useRouter();

  const showDetailsHandler = (countryCode) => {
      router.push('/' + countryCode)
  }

  return (

    <Row className={`${styles.countriesRow} mt-4 g-4`}>
      {countries.map((country) => {
        const id = uuidv4();
        let { flags, cca3, name, population } = country;
        let {common} = name;

        return (
          <Col
            xs={{ span: 10, offset: 1 }}
            md={{ span: 3, offset: 0 }}
            key={id}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.3 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              onClick={() => showDetailsHandler(cca3)}
              className={`${styles.countryContainer} country-container rounded shadow-sm`}
            >
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                // animate={{ opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 0.5 }}
                className={`${styles.imgContainer}`}
              >
                <img
                  src={flags.png}
                  alt=""
                  width="100%"
                  height="100%"
                  className={`${styles.img} rounded`}
                />
              </motion.div>

              <div className="px-3 mt-3">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="country-key fw-bold"
                >
                  {common}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="country-key fs-7 fw-bold"
                >
                  Population:{" "}
                  <span className="fs-6 country-value">{population}</span>
                </motion.p>
                
              </div>
            </motion.div>
          </Col>
        );
      })}
    </Row>
  );
}