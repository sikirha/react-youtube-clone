import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function SearchHeader() {
  const [text, SetText] = useState("");
  const { keyword } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  const navigate = useNavigate();
  useEffect(() => {
    SetText(keyword || "");
  }, [keyword]);
  return (
    <header className="flex w-full p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => SetText(e.target.value)}
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
