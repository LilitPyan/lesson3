import React, {Fragment} from 'react';
import Tabs from 'react-responsive-tabs';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import VectorMapsExample from './Examples/VectorMaps';

const tabsContent = [
    {
        title: 'Vector Maps',
        content: <VectorMapsExample/>
    },
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class MapsExample extends React.Component {
    render() {
        return (
            <Fragment>
                <PageTitle
                    heading="React Simple Maps"
                    subheading="Map chart showing a world map with tooltips using react-tooltip."
                    icon="pe-7s-map icon-gradient bg-premium-dark"
                />
                <Tabs transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}