import React from 'react'


class TeamInfo extends React.Component {
  render() {
    return (
      <div className="col-3 my-3">
       <div className="p-4 border border-2 ">
            <img src={this.props.image} className=" mb-3" alt=""/>
            <h2 className="text-primary text-center mb-3">{this.props.name}</h2>
            <p className="ms-1">{this.props.venue}</p>
            <p className="ms-1">{this.props.address}</p>
            <p className="text-info ms-1">{this.props.email}</p>
            <p className="ms-1">{this.props.phone}</p>
            <p className="ms-1">{this.props.founded}</p>
        </div>
      </div>
    )
  }
}

export default TeamInfo