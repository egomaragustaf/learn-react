import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <button
      className="pointer-events-auto rounded-md bg-blue-600 px-3 py-2 text-lg font-semibold leading-5 text-white hover:bg-blue-500"
      {...props}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.children,
};
