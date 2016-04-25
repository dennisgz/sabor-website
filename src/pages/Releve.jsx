import React from 'react'

/* Containers */
import Navbar from 'containers/Navbar'

/* Components */
import Footer from 'components/Footer'

/* Assets */
// import releve_text from 'raw!assets/releve_info.txt'

// TODO: add line breaks for txt files.
// TODO: put this in an asset and read with raw-loader, somehow preserving line breaks. maybe use markdown or jade.
export default class Releve extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <Navbar />
        <hr />
        <div className="section">
          <h1 className="section-heading text-uppercase text-center">{ 'Relevé' }</h1>
          <hr />
          <div className="container">
            <div className="section-description text-justify">
              <h3 className="section-heading">{ 'The Best Spring Experience' }</h3>
              <p>{ "Relevé is Sabor's high school community impact initiative. Through this program the team aims annually to evoke the interest of high school students to seek a higher education; mimicking the action defined by the French noun, Relevé strives to motivate students to rise." }</p>
              <p>{ "Students accepted to the program spend a three-day weekend on Columbia's Campus. They are hosted by members of the team who not only provide them with housing for the weekend but serve as mentors to questions the students might have concerning college life and the application process." }</p>
              <h3 className="section-heading">{ 'A weekend of Sabor' }</h3>
              <p>{ "The students undergo various workshops in financial aid and admissions which are made to provide essential information about how to apply to college and how one goes about seeking and receiving financial assistances. The program also provides a chance for students to learn about different arts through dance workshops and performing arts workshops that include vocal, theatre, spoken word and visual arts." }</p>
              <p>{ "This program is not only meant to be fun and educational but was established to give under-served students awareness of the opportunities available for pursuing a higher education." }</p>
              <h3 className="section-heading">{ 'A weekend of Dancing' }</h3>
              <p>{ "Sabor is committed to motivating students of under-served backgrounds to seek a higher education; money doesn't have to be a deterrent at achieving one's life goals." }</p>
              <p>{ "All revenue from their fall performance is used for this project in order to provide the essentials necessary for a successful, informative and enjoyable three-day visit for the Relevé students." }</p>
            </div>
          </div>
        </div>
        <div className="transparent-block" />
        <Footer />
      </div>
    )
  }
}
