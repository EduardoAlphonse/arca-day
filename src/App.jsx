import "./App.css";

import { feed } from "./database/quatree";

function App() {
  function copy(message) {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
    copyText.value = message;

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    // alert("Copied the text: " + copyText.value);
  }
  return (
    <div className="App">
      <ul>
        {feed.map((item) => (
          <li key={item}>
            <button onClick={() => copy(item)}>{item}</button>
          </li>
        ))}
      </ul>

      <input type="text" id="myInput" />
    </div>
  );
}

export default App;
