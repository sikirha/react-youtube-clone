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
      <Link to="/">
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => SetText(e.target.value)}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
