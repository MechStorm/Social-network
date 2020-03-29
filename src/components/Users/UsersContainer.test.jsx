import React from 'react';
import {create} from 'react-test-renderer';
import UsersContainer from "./UsersContainer";
import {Provider} from "react-redux";
import store from "../Redux/redux-store";
import {BrowserRouter} from "react-router-dom";

describe('testing UsersContainer', () => {
    test('testing1', () => {
        const testingCallback = jest.fn();
        const component = create(<BrowserRouter><Provider store={store}><UsersContainer/></Provider></BrowserRouter>);
        const root = component.root;
        expect(() => {
            const span = root.findByType('span');
        }).toThrow();
    })
});