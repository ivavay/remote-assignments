import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Card";
function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState(5);
  // Use query to move to the page number
  // Update query to next number
  function updateQuery() {
    setQuery(query + 5);
    // console.log(query);
    console.log("clicked");
  }
  useEffect(() => {
    console.log("useEffect called!");
    // console.log(query);
    fetch(`https://api.github.com/orgs/facebook/repos?per_page=5&page=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((err) => console.log("Oh noes!", err));
  }, [query]);

  return (
    <div className="app">
      {products.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          description={item.description}
          topics={item.topics}
          url={item.html_url}
          visibility={item.visibility}
        />
      ))}
      <button onClick={updateQuery}>More</button>
    </div>
  );
}

export default App;
