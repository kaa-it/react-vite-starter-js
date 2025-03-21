import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App.tsx';
import '@testing-library/jest-dom';

describe('App component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should view header', () => {
		render(<App />);

		const h = screen.getByTestId('header');
		expect(h).toHaveClass('header');
	});
});
