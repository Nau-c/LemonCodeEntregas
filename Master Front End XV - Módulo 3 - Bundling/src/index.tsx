import React from 'react';
import { createRoot } from "react-dom/client";
import { Test } from './Test';

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <Test />
  </div>
);
