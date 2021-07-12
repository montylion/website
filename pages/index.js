import Head from "next/head";
import Link from "next/link";
import parse from "html-react-parser";

export async function getServerSideProps(context) {
  const localeJSON = require(`../locales/${context.locale}.json`);
  return {
    props: { localeJSON },
  };
}

export default function Home({ localeJSON }) {
  return (
    <home>
      <Head>
        <title>Monty</title>
      </Head>
      <section>
        <div>
          <h1>{localeJSON.index.imageSection.paragraph}</h1>

          <div id="about">
            <div>
              <h3>{localeJSON.index.about.header}</h3>
              <p>{parse(localeJSON.index.about.paragraphs.a)}</p>
              <p>{parse(localeJSON.index.about.paragraphs.b)}</p>
            </div>
          </div>

          <div>
            <div id="stuff">
              <h3>{localeJSON.index.stuff.header}</h3>
              <p>{localeJSON.index.stuff.paragraph}</p>
              <div>
                <div>
                  <h2>{localeJSON.index.stuff.cards[0].title}</h2>
                  <div>
                    <a
                      href="https://github.com/montylion/discord-md-badge"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                  <p>{localeJSON.index.stuff.cards[0].caption}</p>
                  <p>{localeJSON.index.misc.languages}: JavaScript, Next.js</p>
                </div>
                <div>
                  <h2>{localeJSON.index.stuff.cards[1].title}</h2>
                  <div>
                    <a
                      href="https://github.com/montylion/website"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                  <p>{localeJSON.index.stuff.cards[1].caption}</p>
                  <p>{localeJSON.index.misc.languages}: JavaScript, Next.js</p>
                </div>
                <div>
                  <h2>{localeJSON.index.stuff.cards[2].title}</h2>
                  <div>
                    <a
                      href="https://github.com/montylion/neofetch-but-its-always-arch"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                  <p>{localeJSON.index.stuff.cards[2].caption}</p>
                  <p>{localeJSON.index.misc.languages}: Shell</p>
                </div>
                <div>
                  <h2>{localeJSON.index.stuff.cards[3].title}</h2>
                  <div>
                    <a href="https://croissant.montylion.dev" target="_blank">
                      Website
                    </a>
                    <p></p>
                    <a
                      href="https://github.com/montylion/croissant"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                  <p>{localeJSON.index.stuff.cards[3].caption}</p>
                  <p>{localeJSON.index.misc.languages}: JavaScript, Next.js</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div id="contact">
              <h1>{localeJSON.index.contact.header}</h1>
              <p>{localeJSON.index.contact.paragraph}</p>
              <div>
                <a href="https://github.com/montylion" target="_blank">
                  GitHub: montylion
                </a>
                <p />
                <a title={localeJSON.index.easterEggs.discord}>
                  Discord: montylion#3581
                </a>
                <p />
                <a href="https://twitter.com/montylion_" target="_blank">
                  Twitter: montylion_
                </a>
                <p />
                <a href="mailto:hey@montylion.dev" target="_blank">
                  Email: hey@montylion.dev
                </a>
                <p />
                <a href="https://ko-fi.com/montylion" target="_blank">
                  Ko-fi: montylion
                </a>
                <p />
              </div>
            </div>
          </div>
        </div>
        <footer>
          Copyright 2021 - Matteo Monteleone (Monty)
        </footer>
      </section>
    </home>
  );
}
