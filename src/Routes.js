import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import SearchPage from './components/SearchPage/SearchPage';
import InfoPage from './components/InfoPage/InfoPage';

class Routes extends React.Component {
    render () {
        return (
            <Switch>
                <Route 
                    exact path='/'
                    component={MainPage}
                />
                <Route 
                    path='/search'
                    component={SearchPage}
                />
                <Route
                    path='/info/:infoId'
                    render={(routeProps) => {
                        return (
                            <InfoPage infoId={routeProps.match.params.infoId} />
                        )
                    }}
                />
            </Switch>
        )
    }
}

export default Routes;