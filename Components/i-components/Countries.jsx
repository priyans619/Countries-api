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
        let { cca3, name } = country;
        let {} = name;

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
             
            </motion.div>
          </Col>
        );
      })}
    </Row>
  );
}