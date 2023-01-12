import React from 'react';
import articles from '../articles/articles';

function NewsCard() {
  return (
    articles.map(({
      date, title, mainContent, id,
    }) => (
      <div className="flex flex-col rounded bg-white shadow-md p-3 my-10 w-1/2" key={id}>

        <div className="flex justify-between">
          <span className="text-sm text-slate-600">{date}</span>

          <svg className="transition fill-[#574ae801] hover:fill-[#574ae8] duration-300 cursor-pointer stroke-2 stroke-[#574ae8] w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>

        <h1 className="text-lg">{title}</h1>
        <p className="font-light">{mainContent}</p>

      </div>
    ))
  );
}

export default NewsCard;
