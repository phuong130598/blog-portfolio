import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { navLinkBack,blogsBody,blogRating,blogRatingText,blogContent,blogChild} from "./blogs.module.css"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 


const GamePage = ({data: {wpPost: {blogMeta:blog,categories}}}) =>
{
    var image1
    if(blog.pic1 != null)
    {
       image1 = getImage(blog.pic1.localFile);
    }
    var image2
    if(blog.pic2 != null)
    {
       image2 = getImage(blog.pic2.localFile);
    }
    var image3
    if(blog.pic3 != null)
    {
       image3 = getImage(blog.pic3.localFile);
    }
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
                    {image1 != null ?<GatsbyImage image={image1} alt={blog.pic1.altText}/>:<div></div>}
                    {image2 != null ?<GatsbyImage image={image2} alt={blog.pic2.altText}/>:<div></div>}
                    {image3 != null ?<GatsbyImage image={image3} alt={blog.pic3.altText}/>:<div></div>}
                    <br></br>
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
        pic1 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 1000)
            }
          }
        }
        pic2 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 1000)
            }
          }
        }
        pic3 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 1000)
            }
          }
        }
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
