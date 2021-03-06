import React, {
  Component
} from 'react';
import {
  format
} from 'url';


class PresetSetter extends Component {
  constructor(props) {
    super(props);
    this.presets = [{
        name: "Send Humans to Mars",
        dollars: 220000000000,
        proof_source: "https://qz.com/1273644/heres-how-nasa-and-spacex-chart-the-price-of-a-trip-to-mars/",
      },
      {
        name: "Border Wall",
        dollars: 21600000000,
        proof_source: "https://www.reuters.com/article/us-usa-trump-immigration-wall-exclusive-idUSKBN15O2ZN"
      },
      {
        name: "Aircraft Carrier",
        dollars: 12900000000,
        proof_source: "https://fas.org/sgp/crs/weapons/RS20643.pdf",
      },
      {
        name: "Moon Base",
        dollars: 63000000000,
        proof_source: "https://www.marketwatch.com/story/it-would-cost-only-10-billion-to-live-on-the-moon-2016-03-17",
      },
      {
        name: "Universal Basic Income ($12k/year)",
        dollars: 3800000000000,
        proof_source: "https://www.marketwatch.com/story/it-would-cost-only-10-billion-to-live-on-the-moon-2016-03-17",
      },
      {
        name: "Forgive All Student Loan Debt",
        dollars: 1500000000000,
        proof_source: "https://www.nytimes.com/2018/12/01/opinion/letters/student-loans.html"
      },
      {
        name: "Fix Flint Water Crisis",
        dollars: 55000000,
        proof_source: "https://www.theguardian.com/us-news/2018/jul/12/elon-musk-flint-fund-clean-water-contamination"
      }
    ]
    /** TODO: rename target and value to dollars where it refers to dollar amounts */
    this.state = {
      name: this.props.name,
      dollars: this.props.dollars,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
        name: this.presets[event.target.value].name,
        dollars: this.presets[event.target.value].dollars
      },
      () => {
        console.log(this.state.name, this.state.dollars);
        this.props.setProgram(this.state.name, this.state.dollars);
      }
    )

  }

  render() {
    let presets = [];
    for (let index in this.presets) {
      let item = ( < option key = {
          index
        }
        dollars = {
          this.presets[index].dollars
        }
        value = {
          index
        } > {
          this.presets[index].name
        } < /option>)
        presets.push(item);
      }
      return ( <
        div className = "PresetSetter" >
        <
        h1 > How much do you Fund ? < /h1> <
          select onChange = {
            this.handleChange
          }
        className = "presets" > {
          presets
        } <
        /select> <
        /div>
      )
    }
  }

  export default PresetSetter;