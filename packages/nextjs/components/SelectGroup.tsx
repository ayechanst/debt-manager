export const SelectGroup = () => {
  function handleClick() {
    console.log("cards been clicked");
  }
  return (
    /* for each group in person's id, render their groups */
    <>
      <button className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 cursor-pointer" onClick={handleClick}>
        <div className="text-xl font-bold">Card Title</div>
        <p className="text-gray-600">Some information goes here...</p>
      </button>
    </>
  );
};
