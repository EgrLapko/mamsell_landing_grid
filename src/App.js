import React from 'react';
import './style.css';
import { Features } from './components/features/Features';
import Story from './components/story/Story';
import StoryImages from './components/story/StoryImages';
import { Products } from './components/productCards/Products';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Title } from './components/title/Title';
import Text from './components/title/Text';

function App() {
  return (
    <div className="app">
      <Header />
      <Title title="What we offer?" />
      <Features />
      
      <div className="stories-container">
        <StoryImages />
        <Story
          header="What our customers say?"
          title="This is the best freaking store!"
          text="They are truly saying these things. Won`t believe? Just try it, and you`ll think the same."
        />
      </div>

      <Title title="What we do?" />
      <Text />
      <Products />
      <Title title="We are PM" />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
