import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { navLinkBack,blogsBody,blogRating,blogRatingText,blogContent,blogChild} from "./blogs.module.css"
import { Link } from "gatsby"
//import { GatsbyImage, getImage } from 'gatsby-plugin-image' 


const GamePage = ({data: {wpPost: {blogMeta:blog,categories}}}) =>
{
    //const image = getImage(blog.picture.localFile);
    //const star = getImage(wpMediaItem.localFile);
    return (
        <div>
            <Layout title={blog.title}>
                <div  className={blogsBody}>
                    <h1 style={{marginBottom:"10px"}}>{blog.title}</h1>
                    <div className={blogContent}>
                        <div className={blogChild}>
                            <div dangerouslySetInnerHTML={{__html: blog.description}} />
                        </div>
                    </div>
                    <Link to="/blogs" className={navLinkBack}>
                        Back
                    </Link>
                </div>
            </Layout>
        </div>
    )
}
export const query = graphql`
query ($slug: String) {
    wpPost(slug: {eq: $slug}) {
      blogMeta {
        title
        description
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`
export default GamePage;