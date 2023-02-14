import React, { useState } from 'react';
import { Link,graphql } from 'gatsby'
import Layout from '../../components/layout'
import {title,navLink,blogsBody,blogsContent,blogsCard,blogsShow,blogsFilter,checkboxBlog,} from "./blogs.module.css"

const BlogsPage = ({data: {allWpPost: {edges},allWpCategory}}) =>
{
  const [search,setSearch] = useState("")
  const categories = allWpCategory.edges
    return (
        <Layout title="Blogs">
          <div className={blogsBody}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <h2>Alle blogs</h2>
            </div>
            <div className={blogsContent}>
              <div className={blogsShow}>
                {edges.filter((item) =>  search !== "" ? (item.node.categories.nodes[0].name == search|| item.node.categories.nodes[1].name == search):item).map((item) => {
                    const blog = item.node.blogMeta;
                    const slug = item.node.slug;
                    return (
                    <div className={blogsCard}>
                      {item.node.categories.nodes.map((categorie) => <p>{categorie.name}</p>)}
                        <Link className={navLink} to={`/blogs/${slug}`}>
                            <p className={title} key={item.node.id}>{blog.title}</p>
                            <p>
                              {blog.description}
                            </p>
                        </Link>
                    </div>)
                })}
              </div>
              <div className={blogsFilter}>
                <h3>Filter</h3>
                {categories.map((categorie) => {
                  const name = categorie.node.name
                  return (
                    <div className={checkboxBlog}>
                      <input type="radio" name="categorie" value={name} checked={search === name} onChange={(event) => setSearch(event.target.value)}/>
                      <label htmlFor="categorie">{name}</label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Layout>
    )
}
export const query = graphql`
query {
  allWpPost {
    edges {
      node {
        blogMeta {
          title
          description
        }
        id
        slug
        date
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
  allWpCategory {
    edges {
      node {
        name
      }
    }
  }
}
`
export default BlogsPage;