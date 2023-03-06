import React from "react";

export default function Form({ setValue, value, handleSubmit }) {
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="flex pt-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        placeholder="what to do?"
        value={value}
        onChange={onChange}
      />
      <input
        type="submit"
        value="ADD"
        className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
      />
    </form>
  );
}
