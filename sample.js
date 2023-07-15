<div className="container">
  <div className="form-box">
    <div className="header-form">
      <h4 className="text-primary text-center">
        <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "110px" }} />
      </h4>
      <div className="image"></div>
    </div>
    <div className="body-form">
      <form onSubmit={registerUser}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Name"
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
            value={data.name}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
            value={data.email}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
            value={data.password}
          />
        </div>
        <button type="submit" className="btn btn-secondary btn-block">
          Sign Up
        </button>
        <div className="message">
          <div>
            <Link to="/login">Already Have an account</Link>
          </div>
        
        </div>
      </form>
      <div className="social">
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </div>
    </div>
  </div>
</div>;
