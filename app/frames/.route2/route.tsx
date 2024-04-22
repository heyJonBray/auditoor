/* eslint-disable react/jsx-key */
import React from 'react';
import { frames } from '../frames';
import { Button } from 'frames.js/next';

export const POST = frames(async () => {
  return {
    image: <div tw="flex">Route 2</div>,
    buttons: [
      <Button action="post" target="/">
        Go to initial route
      </Button>,
      <Button
        action="post"
        target={{ pathname: '/intro', query: { foo: 'baz' } }}
      >
        Go to route 1
      </Button>,
    ],
  };
});
