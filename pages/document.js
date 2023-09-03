import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
    <link
     href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300&display=swap"
     rel="stylesheet"
   />;
        <body>
          
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;