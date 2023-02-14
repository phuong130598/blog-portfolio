import * as React from 'react'
import Layout from "../components/layout"
import { Link,graphql } from 'gatsby'
import {aboutBody,aboutDiv} from "./Pages.module.css"
const Contact = ({data:{wpPage:{aboutFields}}}) =>
{
    return (
        <Layout title="About">
            <div className={aboutBody}>
                <h1>{aboutFields.title}</h1>
                <div className={aboutDiv}>
                    <h3>Over mezelf:</h3>
                    <p>{aboutFields.aboutMyself}</p>
                </div>
                <div className={aboutDiv}>
                    <h3>Over mijn stage:</h3>
                    <p>{aboutFields.aboutIntern}</p>
                </div>
                <div>
                    <h3>Algemene info van IAMD:</h3>
                    <div>
                        <h5>Adres:</h5>
                        <p>Komiteitstraat 46-52, 2170 Merksem, België</p>
                    </div>
                    <div>
                        <h5>Telefoon:</h5>
                        <p>+32 3 375 50 11 (algemeen)</p>
                        <p>+32 3 375 50 14 (support)</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export const query = graphql`
query {
    wpPage(slug: {eq: "about-page"}) {
      aboutFields {
        title
        aboutMyself
        aboutIntern
      }
    }
  }
`
export default Contact;