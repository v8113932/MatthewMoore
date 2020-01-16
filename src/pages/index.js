import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="HomePage" />
    <h1>Welcome </h1>
    <p>Welcome to this site </p>
    <p>Feel free to look around </p>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Next Page </Link>
  </Layout>
)

export default IndexPage
