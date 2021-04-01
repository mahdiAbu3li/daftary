import HTMLFlipBook from "react-pageflip";
import React, { useState, useEffect } from "react";
import mahdi from "../../mahdi.jpg";
import bookImg from "../../assets/images/book.jpg";
import styles from "./BookStyle.module.css";
type x = React.ForwardedRef<HTMLDivElement>;
interface Props {
  number: string;
  children: string;
}
const PageCover = React.forwardRef((props: any, ref: x) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div
        className="page-content"
        style={{
          backgroundImage: `url(${bookImg})`,
          // width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{props.children}</h1>
        <img
          src={mahdi}
          alt="sd"
          style={{ width: "70%", borderRadius: "40px" }}
        />
      </div>
    </div>
  );
});
const Page = React.forwardRef((props: Props, ref: x) => {
  return (
    <div ref={ref}>
      <div
        className="container"
        style={{ backgroundColor: "white", border: "1px solid black" }}
      >
        <h1>Page Header1</h1>
        <p>{props.children}</p>
        <p>Page number: {props.number}</p>
      </div>
    </div>
  );
});

function Book() {
  return (
    <div className={styles.container}>
      <div
        className={styles.card}
        style={{
          width: "70vw",
          minWidth: "350px",
          // height: "100px",
          // boxShadow: " 5px 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <HTMLFlipBook
          width={400}
          height={480}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          //   onFlip={this.onPage}
          //   onChangeOrientation={this.onChangeOrientation}
          //   onChangeState={this.onChangeState}
          // classNameName="demo-book"
          // style={{ backgroundColor: "#fff" }}
          //#F2E8D9
          //   ref={(el) => (this.flipBook = el)}
        >
          <PageCover>BOOK TITLE</PageCover>
          <Page number="1">Page text</Page>
          <Page number="2">Page text</Page>
          <Page number="3">Page text</Page>
          <Page number="4">Page text</Page>
          <Page number="5">Page text</Page>
          <Page number="6">Page text</Page>
          <Page number="7">Page text</Page>
          <Page number="8">Page text</Page>
          <Page number="9">Page text</Page>
          <Page number="10">Page text</Page>
          <Page number="11">Page text</Page>
          <Page number="12">Page text</Page>
          <PageCover>THE END</PageCover>
          {/* <img
            src={require("../Book/i5.jpg")}
            style={{ width: "50vw" }}
            alt=""
          /> */}
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default Book;
