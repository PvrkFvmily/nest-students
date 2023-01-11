import React, { Component } from 'react'
import Score from './Score'

export default class Student extends Component {
    render() {
        let scoreComponent = this.props.student.scores.map((score, idx) => {
            return(
                <Score
                    score={score}
                    key={idx}
                />
            )
        })
        return (
            <>
                <h2> Student name: {this.props.student.name} </h2>
                <p> {this.props.student.bio} </p>
                
                {scoreComponent}
            </>
        )
    }
}