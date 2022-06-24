import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="HUBZXbO2cCFF3VzIDUEfiW25pSijCX9SwDxXtt6Q"
      serverUrl="https://pctmhefgtigy.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
