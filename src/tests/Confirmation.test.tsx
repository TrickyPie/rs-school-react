import { vi } from 'vitest';
import { act, render } from '@testing-library/react';
import React from 'react';
import { ConfirmationPopup } from '../components/confirmationPopup/ConfirmationPopup';

vi.useFakeTimers();

describe('ConfirmationPopup component', () => {
  it('renders the popup message and hides after a timeout', () => {
    const mockMessage = 'Wow, you are cool';
    const mockHideOn = vi.fn();
    const { getByText } = render(
      <ConfirmationPopup
        message={mockMessage}
        hideOn={() => {
          mockHideOn();
        }}
      />
    );
    const popupElement = getByText(mockMessage);
    expect(popupElement).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(mockHideOn).toHaveBeenCalledTimes(1);
  });
});
