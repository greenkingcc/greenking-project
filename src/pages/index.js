import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGulp } from "react-icons/fa"
import smoke from "../assets/smoke.mp4"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section>
      <video playsinline autoPlay muted>
        <source src={smoke} type="video/mp4" />
      </video>

      <h1>
        <span>G</span>
        <span>R</span>
        <span>E</span>
        <span>E</span>
        <span>N</span>
        <span> </span>
        <span>K</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </h1>
    </section>
    <FaGulp />
  </Layout>
)

export default IndexPage
