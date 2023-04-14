import PropTypes from 'prop-types';

export default function Generator({ joke, btnText }) {
  return (
    <>
      <h1>{ joke.setup }</h1>
      <p>{ btnText !== 'Get Punchline' ? joke.punchline : ''} </p>
    </>
  );
}

Generator.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }),
  btnText: PropTypes.string,
};

Generator.defaultProps = {
  joke: '',
  btnText: '',
};
