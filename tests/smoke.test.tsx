import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';

import * as stories from '../src/App.stories';

const { Default } = composeStories(stories);

describe('simple smoke test', () => {
  it('the app renders', () => {
    const { baseElement } = render(<Default />);

    expect(baseElement).toBeInTheDocument();
  });
});
