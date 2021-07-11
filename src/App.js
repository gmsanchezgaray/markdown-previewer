import { useState } from "react";

import "./App.css";

import CloseIcon from "./assets/close-window.svg";
import OpenIcon from "./assets/open-window.svg";
import Github from "./assets/github-icon.svg";
import LinkedIn from "./assets/linkedin-icon.svg";
import Dribble from "./assets/dribbble-icon.svg";

function App() {
  const text = `# Welcome to my React Markdown Previewer!

## Write something in markdown language...

### Look at some of these examples:

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.


And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
`;

  const [value, setValue] = useState(text);
  const [previewerExpanded, setPreviewerExpanded] = useState(false);
  const [editorExpanded, setEditorExpanded] = useState(false);

  const marked = require("marked");
  const html = marked(value);

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleEditor = () => {
    setEditorExpanded(!editorExpanded);
  };

  const handlePreviewer = () => {
    setPreviewerExpanded(!previewerExpanded);
  };

  return (
    <div>
      <div className={"window editor" + (editorExpanded ? " expanded" : "")}>
        <div className="window-header">
          <div>
            <span className="window-header__decorator-circle"></span>
            <span className="window-header__decorator-circle"></span>
          </div>
          <p className="window-header__title">Editor</p>
          <button className="window-header__button" onClick={handleEditor}>
            <img src={editorExpanded ? CloseIcon : OpenIcon} />
          </button>
        </div>
        <textarea onChange={handleInput}>{value}</textarea>
      </div>

      <div
        className={
          "window previewer" + (previewerExpanded ? " expanded-previewer" : "")
        }
      >
        <div className="window-header">
          <div>
            <span className="window-header__decorator-circle"></span>
            <span className="window-header__decorator-circle"></span>
          </div>
          <p className="window-header__title">Previewer</p>

          <button className="window-header__button" onClick={handlePreviewer}>
            <img src={previewerExpanded ? CloseIcon : OpenIcon} alt="icon" />
          </button>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="previewer-body"
        ></div>
      </div>
      <ul className="social-links">
        <li>
          <a href="https://github.com/gmsanchezgaray" target="_blank">
            <img src={Github} />
            <p>Github</p>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gmsanchezgaray/" target="_blank">
            <img src={LinkedIn} />
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <img src={Dribble} />
            <p>Dribble</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
