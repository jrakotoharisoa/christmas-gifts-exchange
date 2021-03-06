import * as React from 'react';
import { HeaderComponent } from './header';
import { BodyContainer } from '../containers/body';

export const AppComponent = () =>
    (
        <div>
            <HeaderComponent />
            <BodyContainer />
        </div>
    );

