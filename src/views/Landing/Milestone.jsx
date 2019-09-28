import React, { Component } from 'react'

export class Milestone extends Component {
    render() {
        return (
            <section id="milestones">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="milestones-wrap">
                  <h2>Milestones</h2>
                  <div className="milestones-list">
                    <ul>
                      <li>
                        Milestone 1: 22nd September 2019, Launch of Pre-Sale
                      </li>
                      <li>
                        Miltestone 2: 22nd October 2019, Launch of Primary
                        Market
                      </li>
                      <li>
                        Milestone 3: 22nd January 2020, Launch of Exchange (Beta
                        Testing)
                      </li>
                      <li>
                        Milestone 4: April 2020, Launch of Goodrich Exchange and
                        Terminal
                      </li>
                      <li>
                        Milestone 5: June 2020, Launch of EPL Team Chips Primary
                        Market
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )
    }
}

export default Milestone
