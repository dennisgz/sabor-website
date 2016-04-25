import React from 'react'

/* Containers */
import Navbar from 'containers/Navbar'

/* Components */
import Footer from 'components/Footer'


export default class Join extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <Navbar />
        <hr />

        <div className="section">
          <h1 className="section-heading text-uppercase text-center">{ 'Joining Sabor' }</h1>
          <hr />
          <div className="container">
            <div className="section-description">

              <h3 className="section-heading">{ 'Auditions twice a year' }</h3>
              <p className="text-justify">{ "Sabor holds auditions once every semester, typically within the first few weeks. Make sure to like our facebook page to stay up to date!" }</p>

              <h3 className="section-heading">{ 'What is the process?' }</h3>
              <p className="text-justify">{ "In the first evening, the Captains will guide everyone through a simple salsa routine, bachata routine, and some unexpected genre of dance. These will be taught at a brisk pace, but you are not required to learn all the moves perfectly. At the end of the evening, candidates will perform what they've learned to the team." }</p>
              <p className="text-justify">{ "If we like what we see, we'll call you back for a second and final round the following evening. You'll perform the same routines from the previous day either with one other candidate or individually to a panel of board members. We'll also ask to show-off one  of your \"talents\". This part is intended to be fun and low stress - just be yourself!" }</p>

              <h3 className="section-heading">{ 'What are we looking for?' }</h3>
              <p className="text-justify">{ "First and foremost, it is absolutely " }<strong>{ "not " }</strong>{ "necessary to have prior experience. The most important things we look for are your ability to keep the musical rhythm in your heart, performance ability and stage presence, passion, and how quickly you learn. If you mess up, no matter what happens, " }<em>{ "keep dancing. " }</em>{ "Make up the choreo, catch the next measure, but always keep dancing and keep your basic footwork. Many of our current and past members had little to no dancing experience during auditions."}</p>

              <h3 className="section-heading">{ 'How can I prepare?' }</h3>
              <p className="text-justify">{ "Dance, dance, and dance. Come to our workshops where we guide you through the basics of salsa and bachata - we usually host one every month. Listen to salsa and bachata music to become familiar with the rhythm and counting - the footwork is the core foundation of the dance, and it's very simple! It's just a matter of practice." }</p>
            </div>
          </div>
        </div>
        <div className="transparent-block" />
        <Footer />
      </div>
    )
  }
}
