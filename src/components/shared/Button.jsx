function Button({ children, type, isDisabled }) {
  return (
    <div>
      <button 
      type={type}
      disabled={isDisabled}
      className={`bg-gray-800 hover:bg-gray-900 text-white font-bold mt-5 py-2 px-4 border-b-4 border-pink-500 hover:border-ping-500 rounded ${isDisabled? 'opacity-50 cursor-not-allowed' : ''}`}>
        {children}
      </button>
    </div>
  );
}

Button.defaultProps = {
  type: 'button',
  isDisabled: false
}

export default Button;
