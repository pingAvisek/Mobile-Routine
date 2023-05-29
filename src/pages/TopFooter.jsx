import React from "react";

export default function TopFooter() {
  return (
    <div>
      <h1 className="heading-one">Subscribe to our Newsletter:</h1>
      <form action="">
        <div className="news-letter-subscription border-2 w-full flex items-center justify-between my-4">
          <input
            className="focus:outline-none px-2 w-full"
            type="email"
            name="newsletter"
            id="newsletter"
            placeholder="Enter your email address"
            onChange={(e) => console.log(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary bg-primary p-2 uppercase text-white"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
