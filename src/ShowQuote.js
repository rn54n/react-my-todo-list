import useRandomQuote from "./useRandomQuote";
import "./ShowQuote.css";

const ShowQuote = () => {
  const quote = useRandomQuote();

  return (
    <div className="randomQuote">
      <blockquote>{quote.text}</blockquote>
      <span>
        {quote.author !== "" ? "—" : ""} <cite>{quote.author}</cite>
      </span>
    </div>
  );
};

export default ShowQuote;
