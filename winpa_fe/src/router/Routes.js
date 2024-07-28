import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeRoutes from './HomeRoutes';

console.log("routes");

function AppRoutes() {
    return (
        <div>
            <Router>
                <Routes>
                    {HomeRoutes.map((homeRoute, index) => {
                        console.log("Routes", homeRoute);
                        return (
                            <Route
                                key={index}
                                path={homeRoute.path}
                                element={<homeRoute.component />}
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default AppRoutes;