import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { setAuth, getUser, setTeam } from './../store/actions';
import Login from './Login';
import CreateTask from './CreateTask';
import StopTask from './StopTask';
import Team from './Team';
import Loading from './Loading';
import { GlobalStyle } from '../styled';

export class App extends Component {

    componentDidMount() {
        const {
            dispatch,
        } = this.props;

        const auth = JSON.parse(localStorage.getItem('auth')) || null;

        if (auth) {
            dispatch(setAuth(auth));
            dispatch(getUser(auth));
        }

        const team = localStorage.getItem('team') || null;

        if (auth && team) {
            dispatch(setTeam(team));
        }
    }

    render() {
        const {
            task,
            team,
            ui,
            user,
        } = this.props;

        return (
            <Fragment>
                <GlobalStyle />
                { ui.isLoading ? (
                    <Loading />
                ) : (
                    <Fragment>
                        { !user && <Login /> }

                        { user && !team && <Team /> }

                        { user && team && !task && <CreateTask /> }

                        { user && team && task && <StopTask /> }
                    </Fragment>
                ) }
            </Fragment>
        );
    }
}

export const mapStateToProps = state => ({
    project: state.project,
    projects: state.projects,
    task: state.task,
    team: state.team,
    ui: state.ui,
    user: state.user,
});

export default connect(mapStateToProps)(App);
