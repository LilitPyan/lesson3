import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import TabExample from './Tabs/';
import NotificationsExamples from './Notifications/';
import TooltipsPopoversExample from './TooltipsPopovers/';
import ModalsExample from './Modal/';
import ProgressBarsExamples from './ProgressBar/';
import CarouselExample from './Carousel/';
import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';
import VectorMapsBasic from "./Maps/Examples/VectorMaps/Basic";

const Components = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.url}/tabs`} component={TabExample}/>
                    <Route path={`${match.url}/notifications`} component={NotificationsExamples}/>
                    <Route path={`${match.url}/tooltips-popovers`} component={TooltipsPopoversExample}/>
                    <Route path={`${match.url}/progress-bar`} component={ProgressBarsExamples}/>
                    <Route path={`${match.url}/carousel`} component={CarouselExample}/>
                    <Route path={`${match.url}/modals`} component={ModalsExample}/>
                    <Route path={`${match.url}/maps`} component={VectorMapsBasic}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Components;