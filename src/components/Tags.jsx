// Function to return a span based on the tag
const getTag = (tag) => {
  if (tag === "New") {
    return <span className="new-tag">New</span>;
  } else if (tag.includes("%")) {
    return <span className="sale-tag">{tag}</span>;
  } else {
    return null; // No tag or other types of tags
  }
};

export default getTag;
