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
          <form className="form-container" name="contact" action="success/" method="post" data-netlify="true" data-netlify-recaptcha="true">
            <p className="hidden">
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <div>
              <label>Vardas</label>
              <input type="text" name="name" id="name" required/>
            </div>
            <div>
              <label>El. paštas</label>
              <input type="email" name="email" id="email" pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$" required/>
            </div>
            <div>
              <label>Tema</label>
              <input type="text" name="subject" id="subject" required/>
            </div>
            <div>
              <label>Žinutė</label>
              <textarea name="message" id="message" required></textarea>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
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