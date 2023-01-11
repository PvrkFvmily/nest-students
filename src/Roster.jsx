import React, { Component } from 'react'
import Student from './Student'

export default class Roster extends Component {
    render() {
        let studentComponents = this.props.students.map((student, idx) => {
            return (
                <Student 
                    student={student}
                    key={idx}
                />
            )
        })

        return (
            <>
                {studentComponents}
            </>
        )

    }
}   