import { useEffect, useState } from "react";

const useRandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  useEffect(() => {
    // fetch call to make request
    // show quote only on page first load
    const fetchQuote = async () =>
      await fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
          const randomQuote = data[Math.floor(Math.random() * data.length)];
          setQuote(randomQuote);
        });

    fetchQuote();
  }, []);
  return quote;
};

export default useRandomQuote;
