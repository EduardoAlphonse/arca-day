import { useState } from "react";
import "./App.css";

import { feed as feedArray } from "./database/quatree";

function App() {
  const [feed, setFeed] = useState(feedArray);
  const [filteredFeed, setFilteredFeed] = useState(feedArray);
  const [search, setSearch] = useState("");

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

  function filterFeed(event) {
    const searchText = event.target.value;
    setSearch(searchText);

    if (searchText.length !== 0) {
      const newFilteredFeed = feed.map((item) =>
        item.filter((i) =>
          i.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        )
      );
      setFilteredFeed(newFilteredFeed);
      return;
    }
    setFilteredFeed(feedArray);
  }

  return (
    <div className="App">
      <input
        type="text"
        onChange={filterFeed}
        value={search}
        placeholder="Procurar ração..."
      />
      <div className="lists">
        {filteredFeed.map((brand, index) => (
          <ul key={`brand_${index}`}>
            {brand.map((item) => (
              <li key={item}>
                <button onClick={() => copy(item)}>{item}</button>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <input type="text" id="myInput" />
    </div>
  );
}

export default App;
