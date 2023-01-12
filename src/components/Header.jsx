import React from 'react';

function Header() {
  return (
    <header className="flex flex-col justify-between items-center h-40 text-white bg-gradient-to-r from-[#574AE8] to-[#3EA1DB]">
      <div className="flex justify-between text-white mt-5 w-1/2">
        <span>Codelândia</span>
        <span>blog</span>
      </div>

      <div className="relative w-1/2 mb-5">
        <svg className="absolute w-6 h-6 bottom-2 left-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
        </svg>

        <input
          className="rounded bg-unfocused pl-12 w-full h-10 text-white"
          placeholder="Pesquisar no blog"
          type="search"
          name="findArticle"
          id="findArticle"
        />

      </div>
    </header>
  );
}

export default Header;
