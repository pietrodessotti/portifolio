import { render, screen } from '@testing-library/react';

import Home from '.';

describe('Home Component', () => {
    it('ready Hello World of Home', () => {
        render(
            <Home />
        );

        const getText = screen.getByText('Hello World!');
        expect(getText).toBeInTheDocument();
    });
});