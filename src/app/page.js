import React from "react";
import Link from "next/link";
import Script from "next/script";
import ScrambleText from "../components/cipher";
import Transition from "../components/transition";
import "../assets/style.css";
import "../assets/app.css";

export default function Index() {
  return (
    <div>
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GKSHNP6KPK" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-GKSHNP6KPK');
        `}
        </Script>
      </div>
      <div id="__next">
        <React.Fragment>
          <ScrambleText />
          <Transition />
          <div className="space-transition">
            <header>
              {/* Background image */}
              <div className="fantasy-bg-image img-fluid">
                <div className="mask">
                  <div className="column-container d-flex justify-content-center align-items-center text-center h-100">
                    <a
                      className="cipher"
                      data-original-text="Lindsey's Bookshelf"
                    >
                      ᚪᛒᚳᛞᛖᚠᚷᚻᛁᛄᚳᛚᛘᚾᚩᛈᚳᚱᛋ
                    </a>
                    <Link href="/list">
                      <button
                        className="enter-book"
                        id="enter-book-link"
                      ></button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Background image */}
            </header>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
}
