import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import Modal from 'react-modal'
import facebook1 from '../../images/facebook1.png'
import instagram1 from '../../images/instagram1.png'
import star from '../../images/star.png'
import AOS from "aos";
import "aos/dist/aos.css";



export class MonitorsListItem extends Component {

  constructor(props) {
    super(props)

    this.state = ({ modal: false })

  }

  openModal = () => {
    this.setState({ modal: true })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
    });
  }


  render() {
    return (

      <Link className="list" to={`/edit/${this.props.id}`}>
      <div class="table-row">
      <div class="table-cell brand first-cell">
        <p>{this.props.img}</p>
      </div>
      <div class="table-cell">
        <p>{this.props.cpu}</p>
      </div>
      <div class="table-cell last-cell">
        <a href="https://youtu.be/99vHH_6F0Ko">{this.props.description}</a>
      </div>
      <div class="table-cell last-cell">
        <a className='hz' href="https://youtu.be/99vHH_6F0Ko">{this.props.ram}</a>
      </div>
      <div class="table-cell last-cell">
        <a href="https://youtu.be/99vHH_6F0Ko">{this.props.graphics}</a>
      </div>
      <div class="table-cell last-cell">
        <a href="https://youtu.be/99vHH_6F0Ko">{this.props.display}</a>
      </div>
      <div class="table-cell last-cell">
        <a href="https://youtu.be/99vHH_6F0Ko">{this.props.storage}</a>
      </div>
      <div class="table-cell last-cell">
        <a className='price' href="https://youtu.be/99vHH_6F0Ko">{numeral(this.props.amount / 100).format('$0,0')}</a>
      </div>
      <div class="table-cell last-cell">
        <a href="https://youtu.be/99vHH_6F0Ko">{this.props.op}</a>
      </div>
    </div>
      </Link>

    )
  }
}

export default MonitorsListItem;
