import { BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import ExpenseDashboardPage from '../components2/ExpenseDashboardPage';
import AddExpensePage from '../components2/AddExpensePage';
import HelpPage from '../components2/HelpPage';
import NotFoundPage from '../components2/NotFoundPage';
import Header from '../components2/Header';
import EditExpensePage from '../components2/EditExpensePage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component = {ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component = {AddExpensePage} />
                <Route path="/help" component = {HelpPage} />
                <Route path="/edit/:id" component = {EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;