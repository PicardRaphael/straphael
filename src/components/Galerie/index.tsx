import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import {images} from '../../configs/carousel'

const photos = images;


export default class Galerie extends React.Component {
  constructor() {
    //@ts-ignore
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  //@ts-ignore
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      //@ts-ignore
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      //@ts-ignore
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          //@ts-ignore
          currentImage={this.state.currentImage}
          //@ts-ignore
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}
