import PropTypes from "prop-types"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(item =>
                <button
                type="button"
                key={item}
                onClick={() => onLeaveFeedback(item) }
                >
                    {item}
            </button>
            )
            }
        </div>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;