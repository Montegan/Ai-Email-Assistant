import { useState } from "react";
import axios from "axios";
import "./App.css";
import { data } from "autoprefixer";

function App() {
  const [originalComment, setOriginalComment] = useState("");
  const [commentSummary, setCommentSummary] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [language, setLanguage] = useState("");
  const [email, setEmail] = useState("");

  const generateComment = async () => {
    const response = await axios.get("http://127.0.0.1:5000/originalComment");
    setOriginalComment(response.data.messages);
  };

  const generateEmail = async () => {
    const response = await axios.post("http://127.0.0.1:5000/composeEmail", {
      language: language,
      comment: originalComment,
    });
    setEmail(response.data.email);
    setCommentSummary(response.data.summary);
    setSentiment(response.data.sentiment);
  };

  return (
    <div className="text-white flex flex-col items-center gap-10 p-14">
      <h1 className="font-title text-[3.5rem]">AI Email Assistant</h1>

      <div className="grid grid-cols-2   w-[90vw] max-w-[90vw] h-fit min-h-[100vh] gap-x-4">
        <div className="h-fit min-h-[86vh]  w-full flex items-center flex-col gap-5">
          <div className=" h-fit min-h-[86vh] w-full flex flex-col gap-3  ">
            <label
              htmlFor="Original_Comment"
              className="font-title font-bold opacity-35 text-left text-[1.5rem]"
            >
              Original Comment
            </label>
            <textarea
              name="Original_Comment"
              id="Original_Comment"
              className=" h-fit min-h-[85vh] w-full p-3 text-[1.1rem] focus:outline-none rounded-xl bg-[#191A23]"
              value={originalComment}
              onChange={(e) => {
                setOriginalComment(e.target.value);
                console.log(e.target.value);
              }}
            ></textarea>
          </div>
          <button
            onClick={generateComment}
            className="bg-slate-200 hover:bg-slate-300  active:bg-slate-50  p-3 text-black text-lg font-bold w-[30vw] rounded-md"
          >
            Generate Comment
          </button>
        </div>

        <div className="flex flex-col items-center min-h-[100vh] h-fit w-full gap-3">
          <div className="flex justify-between w-full">
            <span
              htmlFor="customer_email"
              className="font-title font-bold text-left opacity-35 text-[1.5rem]"
            >
              Email to Customer
            </span>
            <div className="rounded-xl p-1 self-end   w-fit">
              <label
                htmlFor="language"
                className="font-title text-[1.3rem] opacity-20"
              >
                Output Language
              </label>
              <select
                name="language"
                id="language"
                className=" rounded-lg focus:outline-none ml-3 text-black p-1 w-[10vw]"
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Chinese">Chinese</option>
                <option value="Tagalog">Tagalog</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="Arabic">Arabic</option>
                <option value="French">French</option>
              </select>
            </div>
          </div>

          <div className="h-fit min-h-[85vh] w-full">
            <textarea
              name="customer_email"
              id="customer_email"
              className="h-fit min-h-[85vh] w-full p-3 text-[1.1rem] focus:outline-none rounded-xl bg-[#191A23]"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(e.target.value);
              }}
            ></textarea>
          </div>
          <button
            onClick={generateEmail}
            className="bg-green-400 hover:bg-green-500 active:bg-green-600   p-3 text-black text-lg font-bold w-[30vw] rounded-md"
          >
            Generate Email
          </button>
        </div>

        {/* <div className="  w-full flex flex-col gap-10">
          {/* <div className="h-[75%] max-h-[75%]">
            <label
              htmlFor="content_summary"
              className="font-title font-bold text-left text-[1.5rem]"
            >
              Comment Summary
            </label>
            <textarea
              name="content_summary"
              id="content_summary"
              className=" h-full max-h-full  w-full p-2 focus:outline-none rounded-xl bg-[#191A23]"
              value={commentSummary}
              onChange={(e) => {
                setCommentSummary(e.target.value);
                console.log(e.target.value);
              }}
            ></textarea>
          </div> 
        </div> */}
      </div>
    </div>
  );
}

export default App;
