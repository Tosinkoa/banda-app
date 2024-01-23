import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { Provider } from "react-redux";
import store from "@/store/store";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
          },
        }}
      >
        <main className={`${montserrat.variable}`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </motion.div>
    </Provider>
  );
};

export default App;
