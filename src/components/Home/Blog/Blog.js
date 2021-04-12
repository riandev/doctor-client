import React from "react";
import ellipse1 from "../../../images/Ellipse 1.png";
import ellipse2 from "../../../images/Ellipse 2.png";
import ellipse3 from "../../../images/Ellipse 3.png";
import BlogCard from "../BlogCard/BlogCard";

const blogData = [
  {
    photo: ellipse1,
    bloggerName: "Dr. Caudi",
    date: "23 April 2019",
    blogTitle: "2 times of brush in a day can keep you healthy",
    blogText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, minima ipsa? Deserunt id accusantium exercitationem facilis dignissimos?",
  },
  {
    photo: ellipse2,
    bloggerName: "Dr. John Mitchel",
    date: "25 October 2019",
    blogTitle: "2 times of brush in a day can keep you healthy",
    blogText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, minima ipsa? Deserunt id accusantium exercitationem facilis dignissimos?",
  },
  {
    photo: ellipse3,
    bloggerName: "Dr. Harun",
    date: "23 June 2021",
    blogTitle: "2 times of brush in a day can keep you healthy",
    blogText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, minima ipsa? Deserunt id accusantium exercitationem facilis dignissimos?",
  },
];

const Blog = () => {
  return (
    <section className="mt-5 mb-5">
      <div className="text-center mt-5">
        <h5 style={{ color: "#1cc7c1" }}>OUR BLOG</h5>
        <h2 style={{ color: "#3a4256" }}>From Our Blog News</h2>
      </div>
      <div className='container mt-5'>
        <div className="row">
          {blogData.map((blog) => (
            <BlogCard blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
