
export function Button({ color, text }) {
  return (
    <button
      type="submit"
      className={`${color} transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#d4145a] hover:to-[#004e92] text-white px-7 py-3 my-4 text-[22px]  font-bold rounded-full shadow mt-8`} >
      {text}
    </button>
  );
}
