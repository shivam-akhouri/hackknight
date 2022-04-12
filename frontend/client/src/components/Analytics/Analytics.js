import React from 'react'
import PieChart from '../PieChart/PieChart'

export default function Analytics() {
  return (
    <>
    <h2>Suspicious drugs</h2>
    <div class="analytics">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Medicine Name</th>
      <th scope="col">Last Tracked</th>
      <th scope="col">Severity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1234</th>
      <td>Dolo</td>
      <td>Kennedy</td>
      <td>123.321.324.543</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>

<h2>Expired Drugs</h2>
<div class="analytics">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Medicine Name</th>
      <th scope="col">Date of Expiry</th>
      <th scope="col">Seller ID</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2345</th>
      <td>Dolo</td>
      <td>12/03/22</td>
      <td>3224</td>
    </tr>
    <tr>
      <th scope="row">3423</th>
      <td>Paracetamol</td>
      <td>15/03/22</td>
      <td>4242</td>
    </tr>
    <tr>
      <th scope="row">3131</th>
      <td>Crocin</td>
      <td>11/03/22</td>
      <td>1212</td>
    </tr>
  </tbody>

</table>

</div>
<div className="bargraph">
    <h2>Drug Transaction this week</h2>
	<section>
		<article id="bar_graph">
		<div>
			<p>30%</p>
		</div>
		<div>
			<p>40%</p>
		</div>
		<div>
			<p>87%</p>
		</div>
		<div>
			<p>69%</p>
		</div>
        <div>
			<p>59%</p>
		</div>
        <div>
			<p>78%</p>
		</div>
        <div>
			<p>80%</p>
		</div>
			</article>
	{/* <!--<article id="rerun">
			<p>RERUN</p>
		</article>--> */}
	</section>
    
</div>
<PieChart/>
    </>
  )
}
