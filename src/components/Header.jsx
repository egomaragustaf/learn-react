import PropTypes from "prop-types";

export default function Header({ author }) {
  const authorName = author ?? "Ego Maragustaf";

  return (
    <header>
      <h1 className="text-3xl font-bold underline">
        Hi there! I am {authorName} 🤘
      </h1>
    </header>
  );
}

Header.propTypes = {
  author: PropTypes.string,
};
