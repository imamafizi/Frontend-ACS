"use client";

const Pagination = ({ prevPage, nextPage, page }) => {
  return (
    <nav className="flex justify-center mt-6">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
            onClick={prevPage}
          >
            Prev
          </button>
        </li>
        <li className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:text-gray-700">
          {page}
        </li>
        <li>
          <button
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
            onClick={nextPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
