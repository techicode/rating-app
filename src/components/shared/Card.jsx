function Card({ children }) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-md shadow-indigo-500/20 p-2 max-w-lg mx-auto max-h-full flex place-content-between">
      {children}
    </div>
  );
}

export default Card;
