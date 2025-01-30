import "./NotFound.css";
function NotFound() {
  return (
    <>
      <div>
        <div className="notfound-container">
          <h1 className="notfound-heading">404 Not Found</h1>
          <p>Your visited page was not found. You may go to the Home page.</p>
          <a href="/">
            <button>Home</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default NotFound;
