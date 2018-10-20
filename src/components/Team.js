import React from 'react';
import { connect } from 'react-redux';
import { Container, FormGroup, FormSelect, Button } from '../styled';
import FormComponent from './FormComponent';
import { setTeam } from '../store/actions';

class Team extends FormComponent {

    constructor(props) {
        super(props);

        this.state = {
            team: '',
            teams: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const {
            team,
        } = this.state;

        const {
            dispatch,
        } = this.props;

        dispatch(setTeam(team));
    }

    isValid() {
        const {
            team,
        } = this.state;

        return team.trim() !== '';
    }

    render() {
        return (
            <Container>
                <form method="POST" onSubmit={ this.handleSubmit }>
                    <FormGroup>
                        <FormSelect name="team" id="team" value={ this.state.team } onChange={ this.handleInputChange }>
                            <option key="0" value="">Select team...</option>
                            { this.props.user.teams.map(team =>
                                <option key={ team.uuid } value={ team.uuid }>{ team.name }</option>
                            ) }
                        </FormSelect>
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
    user: state.user,
});

export default connect(mapStateToProps)(Team);
