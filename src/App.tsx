import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {HomePage} from './pages/HomePage';
import {StatPage} from './pages/StatPage';
import {ConfigPage} from './pages/ConfigPage';
import {useAppDispatch} from "./hooks";
import {setCurrentDateEmptyItem} from "./features/tasks/statSlice";
import {Layout} from "./components/Layout";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        //Добавляем в статистику текущий день
        dispatch(setCurrentDateEmptyItem());
    }, []);

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/stat">
                        <StatPage/>
                    </Route>
                    <Route path="/config">
                        <ConfigPage/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
