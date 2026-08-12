// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

/**
 * @file InputClearButton.tsx
 * @input Uses React, Button, Icon
 * @output Exports InputClearButton shared clear button for input components
 * @position Shared primitive; used by Typeahead, Tokenizer, TextInput
 */

import type {ReactNode} from 'react';
import * as stylex from '@stylexjs/stylex';
import {Button} from '../Button';
import {Icon} from '../Icon';

const styles = stylex.create({
  button: {
    height: '20px',
    flexShrink: 0,
    // Expand the tap target to >=24px ONLY on touch (WCAG 2.5.8 is a touch
    // requirement). On a fine pointer the 20px glyph is precise enough, and an
    // unconditional overlay could overlap neighboring controls in dense
    // layouts. The inset is 0 by default (hit area == visual glyph) and grows
    // to -4px (=> 28x28) under a coarse pointer. Driven through a custom
    // property because StyleX only allows plain values inside a pseudo-element;
    // the conditional lives on this top-level property instead.
    '--clear-hit-inset': {
      default: '0px',
      '@media (pointer: coarse)': '-4px',
    },
    '::after': {
      content: '""',
      position: 'absolute',
      inset: 'var(--clear-hit-inset)',
    },
  },
});

export interface InputClearButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  xstyle?: stylex.StyleXStyles;
}

export function InputClearButton({
  label,
  onClick,
  xstyle,
}: InputClearButtonProps): ReactNode {
  return (
    <Button
      variant="ghost"
      size="sm"
      label={label}
      icon={<Icon icon="close" size="sm" color="inherit" />}
      onClick={onClick}
      isIconOnly
      xstyle={[styles.button, xstyle]}
    />
  );
}

InputClearButton.displayName = 'InputClearButton';
