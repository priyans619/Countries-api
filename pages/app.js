import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'styles/Main.scss'
import 'styles/global.css'
import { useEffect } from "react";


function MyApp({}) {

    useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
    }, []);

 }

export default MyApp;
