import { React } from 'react';

const Blog = (props) => {

  let items = null;
  if (props.data) {
    items = props.data.map(posts => {
      return (
        <div key={posts.title} className="blog-item">
          <div className="blog-title-container">
            <div className="blog-title-child">
              <div className="blog-title">{posts.title}</div>
            </div>
            <div className="blog-title-child">
              <div className="blog-creationDate">{`Criado em ${posts.creationDate}`}</div>
            </div>
          </div>
          <div className="blog-content">{posts.content}</div>
          <div className="blog-images-container">
            {posts.images.map(imgs => {
              return <div className="blog-image"><img alt={imgs} src={`images/${imgs}`} /></div>
            })}
          </div>
          <hr />
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Blog</h1>
      <h3>Blog items</h3>
      <div>
        {items}
      </div>
    </div>
  )
}

export default Blog;