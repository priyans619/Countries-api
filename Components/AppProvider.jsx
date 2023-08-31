export default function AppProvider({children}) {

    const [darkTheme] = useState(undefined);

      useEffect(() => {
         if (darkTheme !== undefined) {
           if (darkTheme) {
             document.documentElement.setAttribute("data-theme", "dark");
             window.localStorage.setItem("theme", "dark");
           } else {
             document.documentElement.removeAttribute("data-theme");
             window.localStorage.setItem("theme", "light");
           }
         }
       }, [darkTheme]);

}