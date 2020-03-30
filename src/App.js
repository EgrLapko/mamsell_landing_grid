import React from 'react';
import './style.css';
import { Features } from './components/features/Features';
import Story from './components/story/Story';
import StoryImages from './components/story/StoryImages';
import { Products } from './components/productCards/Products';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Features />
      <div className="stories-container">
        <StoryImages />
        <Story
          header="What our customers say?"
          title="This is the best freaking store!"
          text="They are truly saying these things. Won`t believe? Just try it, and you`ll chnge your mind."
        />
      </div>
      <Products />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
