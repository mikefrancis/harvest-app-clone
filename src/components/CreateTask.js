import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import FormComponent from './FormComponent';
import { createTask, getProjects, setProject } from './../store/actions';
import { Button, Container, FormGroup, FormInput, FormSelect } from './../styled/index';
import { DATE_FORMAT } from '../lib/date';

class CreateTask extends FormComponent {

    constructor(props) {
        super(props);

        this.state = {
            project: '',
            name: '',
            description: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const {
            dispatch,
            projects,
            team,
        } = this.props;

        if (projects.length === 0) {
            dispatch(getProjects(team));
        }

    }

    isValid() {
        const {
            project,
            name,
        } = this.state;

        return project.trim() !== '' && name.trim() !== '';
    }

    handleSubmit(event) {
        event.preventDefault();

        const {
            project,
            name,
            description,
        } = this.state;

        if (!this.isValid()) {
            return;
        }

        const {
            dispatch,
            team,
        } = this.props;

        dispatch(
            setProject(project)
        );

        dispatch(
            createTask({
                team,
                project,
                name,
                description,
                started_at: moment().format(DATE_FORMAT),
            })
        );
    }

    render() {
        const {
            projects,
        } = this.props;

        return (
            <Container>
                <form method="POST" onSubmit={ this.handleSubmit }>
                    <FormGroup>
                        <FormSelect name="project" id="project" value={ this.state.project } onChange={ this.handleInputChange }>
                            <option key="0" value="">Select project...</option>
                            { projects.map(project =>
                                <option key={ project.uuid } value={ project.uuid }>{ project.name }</option>
                            ) }
                        </FormSelect>
                    </FormGroup>

                    <FormGroup>
                        <FormInput onChange={ this.handleInputChange } type="text" id="name" name="name" value={ this.state.name } placeholder="Task" />
                    </FormGroup>

                    <FormGroup>
                        <FormInput onChange={ this.handleInputChange } id="description" name="description" value={ this.state.description } placeholder="Enter extended description here..." />
                    </FormGroup>

                    <FormGroup>
                        <Button full disabled={ !this.isValid() } type="submit">Submit</Button>
                    </FormGroup>
                </form>
            </Container>
        );
    }

}

const mapStateToProps = state => ({
    projects: state.projects,
    team: state.team,
});

export default connect(mapStateToProps)(CreateTask);
