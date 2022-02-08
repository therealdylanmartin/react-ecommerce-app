import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component'

// match, location, and history are passed through Route component
const ShopPage = ({ match }) => (
  <div>
    <Route exact path={match.path} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)

export default ShopPage;
