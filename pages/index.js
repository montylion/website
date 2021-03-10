import Head from 'next/head'
import "98.css";
import React, { useState } from "react";

export default function Home() {
  const [showMe, setShowMe] = useState(true);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <home>
      <Head>
        <title>monty.exe</title>
        <meta property="og:site_name" content="site_name"></meta>
        <meta property="og:url" content="https://youtu.be/cfiPB8omuQQ"></meta>
        <meta property="og:title" content="title"></meta>
        <meta property="og:description" content="description"></meta>
        <meta property="og:type" content="website"></meta>
        <meta name="og:image" itemprop="image" content="https://media.discordapp.net/attachments/806560110902116353/819281353869623386/unknown.png"></meta>
      </Head>
      <section>
        <div style={{ width: 300 }} className="window monty">
          <div className="title-bar">
            <div className="title-bar-text">monty.exe</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          </div>

          <div className="window-body">
            <p style={{ textAlign: "center" }}>Hi! Welcome to my website!</p>
            <div className="field-row" style={{ justifyContent: "center" }}>
              <button onClick={() => setCount(count + 1)}>+</button>
              <button onClick={() => setCount(count - 1)}>-</button>
              <button onClick={() => setCount(0)}>0</button>
            </div>
          </div>
        </div>

        <div style={{ display: showMe ? "block" : "none", width: 400 }} className="window survey">
          <div className="title-bar">
            <div className="title-bar-text">survey.exe</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          </div>

          <div className="window-body" style={{
            display: showMe ? "block" : "none"
          }}>
            <p style={{ textAlign: "center" }}>Feel free to rate my website!</p>
            <div class="field-row">
              <label for="range22">Very unsatisfied</label>
              <input id="range22" type="range" min="1" max="11" value="11" />
              <label for="range23">Very satisfied</label>
            </div>
            <p style={{ textAlign: "center" }}>ha you can't change it I am very funny</p>
            <button onClick={toggle} style={{ float: 'right' }}>Submit</button>
          </div>
        </div>
      </section>
    </home>
  )
}