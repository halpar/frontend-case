import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { useSelector } from "react-redux";
import Layout from '../presentation/components/Layout';
import LayoutHeader from '../presentation/components/Layout/Header';
import LayoutFooter from '../presentation/components/Layout/Footer';
import LayoutContent from '../presentation/components/Layout/Content';
import LoadingSpinner from '../presentation/components/LoadingSpinner';

// Main
const MainLandingPage = lazy(() => import('../presentation/pages/Main/LandingPage'));
const MainContactUsPage = lazy(() => import('../presentation/pages/Main/ContactUsPage'));
const UserProfilePage = lazy(() => import('../presentation/pages/User/ProfilePage'));

const Routes = () => {
    // const isLoggedIn = useSelector((state) => state);
    const userRole = localStorage.getItem('role');
    return (
        <Router>
            <Layout>
                <LayoutHeader userRole={userRole} />
                <Layout>
                    <LayoutContent pageType="chefs">
                        <Suspense fallback={<LoadingSpinner fullHeight />}>
                            <Switch>
                                {userRole === 'user' && <Route path="/user-profile" exact component={UserProfilePage} />}
                                <Route path="/contact-us" exact component={MainContactUsPage} />
                                <Route path="/" exact component={MainLandingPage} />
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
