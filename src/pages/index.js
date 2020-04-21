import React from "react"
import { Link } from "gatsby"
import "./index.css";

import Layout from "../components/layout"
import Image from "../components/image"
import Navigation from "../components/Navigation/Navigation";
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="text-right p-8">
      <Navigation/>
    </div>
  </Layout>
)

export default IndexPage
