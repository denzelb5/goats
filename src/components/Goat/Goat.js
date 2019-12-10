import React from 'react';
import goatShape from '../../helpers/propz/goatShape';
import PropTypes from 'prop-types';


class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeGoat: PropTypes.func,
  }

  freeGoatEvent = (e) => {
    const { freeGoat, goat } = this.props;
    e.preventDefault();
    freeGoat(goat.id);
  }

  render() {
    const { goat } = this.props;
    return (
      <div className="card col-3">
        <img src={goat.imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.age}</p>
          <p>{goat.description}</p>
          <div className="btn" onClick={this.freeGoatEvent}>Free Me</div>
        </div>
      </div>
    );
  }
}

export default Goat;
