import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../presentation/components/Layout';
import LayoutHeader from '../presentation/components/Layout/Header';
import LayoutFooter from '../presentation/components/Layout/Footer';
import LayoutContent from '../presentation/components/Layout/Content';
import LoadingSpinner from '../presentation/components/LoadingSpinner';

// Main
const LandingPage = lazy(() => import('../presentation/pages/LandingPage'));
const ContactUsPage = lazy(() => import('../presentation/pages/ContactUsPage'));

const Routes = () => {
    const userInfoRedux = useSelector((state) => state.authStore.userInfo);
    return (
        <Router>
            <Layout>
                <LayoutHeader userInfo={userInfoRedux} />
                <Layout>
                    <LayoutContent>
                        <Suspense fallback={<LoadingSpinner fullHeight />}>
                            <Switch>
                                <Route path="/contact-us" exact component={ContactUsPage} />
                                <Route path="/" exact component={LandingPage} />
                                {userInfoRedux && <Route path="/hello-scorp" exact component={LandingPage} />}
                            </Switch>
                        </Suspense>
                    </LayoutContent>
                </Layout>
                <LayoutFooter />
            </Layout>
        </Router>
    );
};

export default Routes;
