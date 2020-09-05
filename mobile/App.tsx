import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/routes/main';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
}