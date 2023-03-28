import * as React from "react"
import { Link,graphql } from 'gatsby'
import Layout from "../components/layout"
import {homeContent,homeFeatured,homeTitleDescription,title,description,games,newBlogs,img} from "./Pages.module.css"

const IndexPage = ({data:{wpPage:{landingFields}}}) => {
  const newestBlogs = landingFields.newestBlogs;
  return (
    <Layout title="Home">
      <div>
          <div className={homeContent} >
            <div className={homeTitleDescription}>
              <h1 className={title}>{landingFields.title}</h1>
              <p className={description}>{landingFields.description}</p>
            </div>
          </div>
        <div className={homeFeatured}>
          <h1 style={{margin:"25px"}}>Nieuwste blogs:</h1>
          <div className={games}>
            {newestBlogs.map((blog) =>
            <Link style={{textDecoration:"none"}} to={`/blogs/${blog.slug}`}>
              <div className={newBlogs}>
                <h1>{blog.blogMeta.title}</h1>
                <p>{blog.blogMeta.description}</p>
              </div>
            </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
query {
  wpPage(slug: {eq: "landing-page"}) {
    landingFields {
      title
      description
      newestBlogs {
        ... on WpPost {
          id
          slug
          blogMeta {
            title
            description
          }
        }
      }
    }
  }
}
`
export default IndexPage;
