import "../styles/globals.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slick.css";
import "../styles/slick-theme-custom.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
