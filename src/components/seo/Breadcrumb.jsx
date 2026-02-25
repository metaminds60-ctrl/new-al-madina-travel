import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-400 mb-6">
      <Link to="/" className="hover:text-yellow-500">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={to}>
            {" / "}
            {isLast ? (
              <span className="text-yellow-500 capitalize">{value.replace("-", " ")}</span>
            ) : (
              <Link to={to} className="hover:text-yellow-500 capitalize">
                {value.replace("-", " ")}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;