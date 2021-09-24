import React from "react" 
React.useLayoutEffect = React.useEffect//for warning produced by antd 
import "../scss/global.scss";
import "antd/dist/antd.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
