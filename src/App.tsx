import "./App.css";
import Typewriter from "../lib/main";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  return (
    // <Typewriter.Container typingSpeed={100} delayBetweenElements={1500}>
    //   <Typewriter.Container delayBetweenElements={1500}>
    //     <div className="text-left">
    //       <Typewriter.Parahraph
    //         key={updateContainer1Text ? "updated" : "not-updated"}
    //         className="text-8xl text-cyan-500"
    //       >
    //         {!updateContainer1Text
    //           ? "Hello Container 1!"
    //           : "Hello Container 1 Updated!"}
    //       </Typewriter.Parahraph>
    //       <Typewriter.Parahraph
    //         className="text-lg text-gray-300"
    //         startAnimation={updateContainer2Text}
    //         typingSpeed={20}
    //       >
    //         Lorem Ipsum is simply dummy text!
    //       </Typewriter.Parahraph>
    //     </div>
    //   </Typewriter.Container>
    //   <Typewriter.Container typingSpeed={10}>
    //     <div className="text-left">
    //       <Typewriter.Parahraph
    //         key={updateContainer2Text ? "updated" : "not-updated"}
    //         className="text-8xl text-cyan-500"
    //       >
    //         {!updateContainer2Text
    //           ? "Hello Container 2!"
    //           : "Hello Container 2 Updated!"}
    //       </Typewriter.Parahraph>
    //       <Typewriter.Parahraph className="text-lg text-gray-300">
    //         Lorem Ipsum is simply dummy text!
    //       </Typewriter.Parahraph>
    //     </div>
    //   </Typewriter.Container>

    //   <div className="space-x-4 mt-5">
    //     <button
    //       className="bg-blue-600 text-white p-4 "
    //       onClick={() => setUpdateContainer1Text((prev) => !prev)}
    //     >
    //       Update Container1 Text
    //     </button>
    //     <button
    //       className="bg-blue-600 text-white p-4"
    //       onClick={() => setUpdateContainer2Text((prev) => !prev)}
    //     >
    //       Update Container2 Text
    //     </button>
    //   </div>
    // </Typewriter.Container>
    <main className="w-full mx-auto max-w-[70ch] flex flex-col gap-32 py-40">
      <section className="flex flex-col place-content-center place-items-center mx-auto">
        <Typewriter.Container typingSpeed={50}>
          <Typewriter.Parahraph className="text-6xl font-extrabold">
            React Typewriter Effect
          </Typewriter.Parahraph>
          <Typewriter.Parahraph className="text-lg mt-5" typingSpeed={30}>
            A typewriter effect is a cool way to animate text in your website
            where each letter appears one by one like it's being typed by a
            typewriter.
          </Typewriter.Parahraph>
        </Typewriter.Container>
      </section>

      <section>
        <code className="bg-gray-700 p-4 rounded-xl flex gap-4 items-center w-fit mx-auto">
          <span>{">"}</span>
          <Typewriter.Parahraph>
            npm install react-effect-typewriter
          </Typewriter.Parahraph>
          <CopyToClipboard
            text="npm install react-effect-typewriter"
            onCopy={() => alert("Copied code to clipboard")}
          >
            <button
              className="ms-4 hover:scale-110 active:scale-95"
              aria-label="Copy installation code to clipboard"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="copy"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                viewBox="0 0 448 512"
                fill="white"
              >
                <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
              </svg>
            </button>
          </CopyToClipboard>
        </code>
      </section>

      <section className="">
        <Typewriter.Container typingSpeed={30}>
          <Typewriter.Parahraph className="text-4xl font-bold mt-5 mb-2">
            Library Features ✨
          </Typewriter.Parahraph>
          <ul className="text-left">
            <li>
              <Typewriter.Parahraph className="text-xl inline-block">
                {"-"} Completely Accessible & SEO friendly.
              </Typewriter.Parahraph>
            </li>
            <li>
              <Typewriter.Parahraph className="text-xl inline-block">
                {"-"} Very lightweight. (less than 10kb)
              </Typewriter.Parahraph>
            </li>
            <li>
              <Typewriter.Parahraph className="text-xl inline-block">
                {"-"} Very easy to use.
              </Typewriter.Parahraph>
            </li>
            <li>
              <Typewriter.Parahraph className="text-xl inline-block">
                {"-"} Highly customizable. You can customize the typing speed,
                delay between elements, when to start typing, children stagger,
                and more.
              </Typewriter.Parahraph>
            </li>
          </ul>
        </Typewriter.Container>
      </section>
      <section>
        <nav className="flex flex-wrap gap-5 justify-center">
          <a
            href="https://github.com/MTG2000/react-effect-typewriter?tab=readme-ov-file#usage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-cyan-200"
          >
            How to Use
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              className="inline"
              fill="currentColor"
            >
              <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
            </svg>
          </a>
          <a
            href="https://github.com/MTG2000/react-effect-typewriter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-cyan-200"
          >
            View on GitHub{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              className="inline"
              fill="currentColor"
            >
              <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
            </svg>
          </a>
          <a
            href="https://www.npmjs.com/package/react-effect-typewriter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-cyan-200"
          >
            View on NPM{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              className="inline"
              fill="currentColor"
            >
              <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
            </svg>
          </a>
        </nav>
      </section>
    </main>
  );
}

export default App;
