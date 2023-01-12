import React from 'react';

function Header() {
  return (
    <header className="flex flex-col items-center h-40 text-white bg-gradient-to-r from-[#574AE8] to-[#3EA1DB]">
      <div className="flex justify-between text-white mt-5 w-1/2">
        <span>Codelândia</span>
        <span>blog</span>
      </div>

      <input
        className="rounded bg-unfocused p-3 mt-10 w-1/2 h-10 text-white"
        placeholder="Pesquisar no blog"
        type="search"
        name="findArticle"
        id="findArticle"
      />
    </header>
  );
}

export default Header;
