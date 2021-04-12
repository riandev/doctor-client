import React from "react";
import Card from "react-bootstrap/Card";

const BlogCard = (props) => {
  const { photo, bloggerName, date, blogTitle, blogText } = props.blog;
  return (
    <section className="col-md-4">
      <Card className="testimonial-card" style={{ width: "20rem" }}>
        <Card.Body>
          <div className="d-flex align-items-center">
            <div>
              <img className="img-fluid w-75" src={photo} alt="" />
            </div>
            <div>
              <h6>{bloggerName}</h6>
              <p className="text-secondary" style={{ fontSize: "15px" }}>{date}</p>
            </div>
          </div>
        </Card.Body>
        <Card.Text>
          <div className="p-3">
            <h5>{blogTitle}</h5>
            <p className="text-secondary" style={{ fontSize: "15px" }}>
              {blogText}
            </p>
          </div>
        </Card.Text>
      </Card>
    </section>
  );
};

export default BlogCard;
