import React from "react"
import Layout from "../components/layout"

const SuccessPage = ({
}) => {
  return (
    <Layout>
      <div className="two-grids -contact">
        <div className="post-thumbnail">
          <img src='/assets/krapikas.png' alt=''/>
        </div>
        <div className="site-header">
            <h2 className="text-center">Jūsų žinutė sėkmingai išsiųsta! <br/> <br/> Žinutė bus svarstoma per artimiausią trenerių susirinkimą.</h2>
        </div>
      </div>
    </Layout>
  )
}
export default SuccessPage
