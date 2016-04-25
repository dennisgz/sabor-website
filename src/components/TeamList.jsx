import React from 'react'

// an array of 'members'. each member is an array['name','position','bio']
import teamMembers from 'assets/team_list.json';

export default class TeamList extends React.Component {



  render() {
    let teamListCol1 = [];
    for (let member of teamMembers)
      teamListCol1.push(
        <li key={ member }>
          <p>{ member }</p>
        </li>
      );

    let teamListCol2 = teamListCol1.splice(teamListCol1.length / 2, teamListCol1.length);

    return (
      <div className="section">
        <div className="container text-center">
          <h1>{ 'Full Roster' }</h1>
          <hr />
          <div className="row">
            <div className="col-md-offset-2 col-md-4 ">
              <ul className="list-unstyled">
                { teamListCol1 }
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-unstyled">
                { teamListCol2 }
              </ul>
            </div>
          </div>  
        </div>
      </div>
    )
  }
}
