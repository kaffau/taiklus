import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"


const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Kontaktai — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail">
          <div className="post-title-contact">
            <h1 className="post-title">Susisiekite pergalių klausimais</h1>
            <p>Padėsiu Jums atnešti sėkmę ir pergales! Turiu atsakymus į visus klausimus</p>
          </div>
          <img src='/assets/krapikas.png' alt=''/>
        </div>
        <div>
          <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>   
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Your Role: <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`