import { Navigate, Route, Routes } from "react-router";

import Layout from "../components/Layout/Layout";
import { routesArr } from "../data/data";

const PagesRouter = () => {
    return (
        <>
            <Routes>
                {
                    routesArr.map((route) => {
                        const RouteComponent = route.element;

                        return (
                            <Route key={route.id} index={route.path == "/converter" && route.path == '/'} path={route.path}
                                element={
                                    <Layout>
                                        <RouteComponent />
                                    </Layout>
                                } />
                        )
                    })
                }
                <Route path='*' element={<Navigate to={'/converter'} replace />} />
            </Routes>

        </>
    )
}

export default PagesRouter