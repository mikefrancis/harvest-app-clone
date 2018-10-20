import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import FormComponent from './FormComponent';
import { stopTask } from './../store/actions';
import { Button, Container } from './../styled/index';
import { DATE_FORMAT } from '../lib/date';

class StopTask extends FormComponent {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const {
            dispatch,
            task,
            team,
            project,
        } = this.props;

        dispatch(
            stopTask({
                team,
                project,
                task: task.uuid,
                ended_at: moment().format(DATE_FORMAT),
            })
        );
    }

    render() {
        const {
            task,
        } = this.props;

        return (
            <Container>
                <h2>{ task.name }</h2>
                { task.description ? (
                    <p>{ task.description }</p>
                ) : null }
                { moment(task.startedAt).fromNow() }
                <form method="POST" onSubmit={ this.handleSubmit }>
                    <Button full type="submit">Stop task</Button>
                </form>
            </Container>
        );
    }

}

const mapStateToProps = state => ({
    project: state.project,
    task: state.task,
    team: state.team,
});

export default connect(mapStateToProps)(StopTask);
