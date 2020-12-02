import React from "react";

const Pagination = ({ page, setPage, nextPage, nextToNext }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onPageChange = (page) => {
    setPage(page);
    scrollTop();
  };

  const onPrevPage = (page) => {
    if (page === 0) page++;
    setPage(page);
    scrollTop();
  };

  const onNextPage = (page) => {
    if (!nextPage) page--;
    setPage(page);
    scrollTop();
  };

  return (
    <ul className="pagination">
      <li onClick={() => onPrevPage(page - 1)} className="prev">
        &lt;&lt;
      </li>
      {page < 4 ? (
        <>
          <li
            className={page === 1 ? "active" : ""}
            onClick={() => onPageChange(1)}
          >
            1
          </li>
          <li
            className={page === 2 ? "active" : ""}
            onClick={() => onPageChange(2)}
          >
            2
          </li>
          <li
            className={page === 3 ? "active" : ""}
            onClick={() => onPageChange(3)}
          >
            3
          </li>
          <li onClick={() => onPageChange(4)}>4</li>
          <li onClick={() => onPageChange(5)}>5</li>
        </>
      ) : nextToNext ? (
        <>
          <li onClick={() => onPageChange(page - 2)}>{page - 2}</li>
          <li onClick={() => onPageChange(page - 1)}>{page - 1}</li>
          <li className="active" onClick={() => onPageChange(page)}>
            {page}
          </li>
          <li onClick={() => onPageChange(page + 1)}>{page + 1}</li>
          <li onClick={() => onPageChange(page + 2)}>{page + 2}</li>
        </>
      ) : nextPage ? (
        <>
          <li onClick={() => onPageChange(page - 3)}>{page - 3}</li>
          <li onClick={() => onPageChange(page - 2)}>{page - 2}</li>
          <li onClick={() => onPageChange(page - 1)}>{page - 1}</li>
          <li className="active" onClick={() => onPageChange(page)}>
            {page}
          </li>
          <li onClick={() => onPageChange(page + 1)}>{page + 1}</li>
        </>
      ) : (
        <>
          <li onClick={() => onPageChange(page - 4)}>{page - 4}</li>
          <li onClick={() => onPageChange(page - 3)}>{page - 3}</li>
          <li onClick={() => onPageChange(page - 2)}>{page - 2}</li>
          <li onClick={() => onPageChange(page - 1)}>{page - 1}</li>
          <li className="active" onClick={() => onPageChange(page)}>
            {page}
          </li>
        </>
      )}
      <li onClick={() => onNextPage(page + 1)} className="next">
        &gt;&gt;
      </li>
    </ul>
  );
};

export default Pagination;
