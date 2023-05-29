import { NavLink } from "react-router-dom";

export default function BottomHeader() {
  return (
    <div className="bottom-header container mx-auto">
      <nav>
        <ul className="flex py-4 gap-8 uppercase font-medium text-lg flex-wrap">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="mobilespecs">Mobile Specs</NavLink>
          </li>
          <li>
            <NavLink to="blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
          <li>
            <NavLink to="guideme">Guide-Me</NavLink>
          </li>
        </ul>
      </nav>
      <div className="search-container">
        <form action="">
          <input
            className="input-text border-gray "
            type="text"
            id="search"
            formMethod="GET"
            placeholder="Search"
            onChange={(e) => console.log(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
