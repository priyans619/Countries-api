
import { useRouter } from "next/router";



export default function Countries({countries}) {
  const router = useRouter();

  const showDetailsHandler = (countryCode) => {
      router.push('/' + countryCode)
  }

}