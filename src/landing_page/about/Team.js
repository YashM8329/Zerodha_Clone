import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="Media/yash.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Yash Mehta</h4>
          <h6>Web Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Yash Mehta, a 21-year-old B.Tech ICT student from DAIICT in Gujarat.
            You are passionate about softwares, human psychology, management,
            and physics. You enjoy activities like football, badminton,
            painting, dancing, and driving.
          </p>
          <p>
            You aspire to become a skilled engineer, have a wide car collection,
            and support your family emotionally and financially. You’re also
            committed to standing out from the crowd and being a respectable
            person while maintaining strong relationships.
          </p>
          <p>
            Connect on{" "}
            <a style={{ textDecoration: "none" }} href="">
              Homepage
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="">
              TradingQnA
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
