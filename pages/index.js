import { useState} from 'react'
import axios from 'axios'
import styles from 'styles/index.module.scss'

export default function Home({data}) {
const isMounted = useRef(false);

const [countries, setCountries] = useState(data);
const [value, setValue] = useState('');
let regions = new Set(data.map(country => country.region))
regions = [ ...regions].sort();
regions = ['All', ...regions]

useEffect(() => {})
    
}
