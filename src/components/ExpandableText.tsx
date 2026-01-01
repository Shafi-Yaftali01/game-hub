// lets create a component that will be a long text and a button to expand or collapse the text like a accordion

import { useState } from "react";

const ExpandableText = ({
  text,
  maxLength,
}: {
  text: string;
  maxLength: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const summary = text.substring(0, maxLength) + "...";
  return (
    <div className="card w-100 border-0 shadow-sm p-3 bg-light rounded-3 text-start">
      {!isExpanded && text.length > maxLength && <p>{summary}</p>}
      {!isExpanded && text.length > maxLength && (
        <button
          className="btn btn-primary small btn-sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Read More
        </button>
      )}
      {isExpanded && <p>{text}</p>}
      {isExpanded && (
        <button
          className="btn btn-primary small btn-sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Read Less
        </button>
      )}{" "}
    </div>
  );
};

export default ExpandableText;
