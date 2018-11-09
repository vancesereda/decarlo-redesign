import React from 'react'
import Link from '../components/Link'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css';
import RandomPhoto from '../components/randomPhoto'
import NukaSlider from '../components/NukaSlider'

const IndexPage = () => (
  	<Layout>
		<div className="random-photo-img">
  			<RandomPhoto />
			  
		</div>
 	</Layout>
)

export default IndexPage
