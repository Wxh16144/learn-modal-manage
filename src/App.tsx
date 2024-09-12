import React from "react";

import EasyModalDemo from './easy-modal';
import NiceModalDemo from './nice-modal';

const App = () => {
  const slogan = `魔法师正在进行最后的仪式，为您带来一项惊艳功能`;

  return (
    <>
      <h3>{slogan}</h3>
      <code hidden>src/App.tsx</code>
      <br />
      <EasyModalDemo />
      <NiceModalDemo />
    </>
  );
}

export default App;
