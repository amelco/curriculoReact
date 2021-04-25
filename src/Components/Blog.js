import { React } from 'react';

const Blog = (props) => {

  let items = null;
  if (props.data) {
    items = props.data.map(posts => {
      return (
        <div key={posts.title} className="blog-item">
          <div className="blog-title-container">
            <div className="blog-title">{posts.title}</div><div className="blog-createDate">{` - criado em ${posts.creationDate}`}</div>
          </div>
          <div className="blog-content">{posts.content}</div>
          {posts.images.map(imgs => {
            return <img alt={imgs} src={`images/${imgs}`} />
          })}
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Blog</h1>
      <h3>Blog items</h3>
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        {items}
      </div>
    </div>
  )
}

export default Blog;