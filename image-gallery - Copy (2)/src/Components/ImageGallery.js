import React, { Component } from "react";
import "./ImageGallery.css";


import cat1 from "./images/cat1.jpg";
import cat2 from "./images/cat2.jpg";
import cat3 from "./images/cat3.jpg";
import cat4 from "./images/cat4.jpg";
import cat5 from "./images/cat5.jpg";
import cat6 from "./images/cat6.jpg";
import cat7 from "./images/cat7.jpg";


import kids1 from "./images/kids1.jpg";
import kids2 from "./images/kids2.jpg";
import kids3 from "./images/kids3.jpg";
import kids4 from "./images/kids4.jpg";

import wf1 from "./images/wf1.jpg";
import wf2 from "./images/wf2.jpg";
import wf3 from "./images/wf3.jpg";
import wf4 from "./images/wf4.jpg";
import wf5 from "./images/wf5.jpg";
import wf6 from "./images/wf6.jpg";
import wf7 from "./images/wf7.jpg";
import wf8 from "./images/wf8.jpg";
import wt1 from "./images/wt1.jpg";
import wt2 from "./images/wt2.jpg";
import wt3 from "./images/wt3.jpg";
import wt4 from "./images/wt4.jpg";
import wt5 from "./images/wt5.jpg";
import wt6 from "./images/wt6.jpg";
import wt7 from "./images/wt7.jpg";
import wt8 from "./images/wt8.jpg";
import wt9 from "./images/wt9.jpg";
import wt10 from "./images/wt10.jpg";
import wt11 from "./images/wt11.jpg";
import wt12 from "./images/wt12.jpg";
import wt13 from "./images/wt13.jpg";
import wt14 from "./images/wt14.jpg";
import wt15 from "./images/wt15.jpg";
import wt16 from "./images/wt16.jpg";
import wt17 from "./images/wt17.jpg";
import ptr1 from "./images/ptr1.jpg";
import ptr2 from "./images/ptr2.jpg";
import ptr3 from "./images/ptr3.jpg";
import ptr4 from "./images/ptr4.jpg";
import ptr5 from "./images/ptr5.jpg";



class ImageGallery extends Component {
  state = {
    images: [
      { filename: cat1, caption: "", category: "Catalyst" },
      { filename: cat2, caption: "", category: "Catalyst" },
      { filename: cat3, caption: "", category: "Catalyst" },
      { filename: cat4, caption: "", category: "Catalyst" },
      { filename: cat5, caption: "", category: "Catalyst" },
      { filename: cat6, caption: "", category: "Catalyst" },
      { filename: cat7, caption: "", category: "Catalyst" },

      { filename: kids1, caption: "", category: "Kidz Life"},
      { filename: kids2, caption: "", category: "Kidz Life"},
      { filename: kids3, caption: "", category: "Kidz Life"},
      { filename: kids4, caption: "", category: "Kidz Life"},
      { filename: wf1, caption: "", category: "Wildfire"},
      { filename: wf2, caption: "", category: "Wildfire"},
      { filename: wf3, caption: "", category: "Wildfire"},
      { filename: wf4, caption: "", category: "Wildfire"},
      { filename: wf5, caption: "", category: "Wildfire"},
      { filename: wf6, caption: "", category: "Wildfire"},
      { filename: wf7, caption: "", category: "Wildfire"},
      { filename: wf8, caption: "", category: "Wildfire"},
      { filename: wt1, caption: "", category: "Worship Team"},
      { filename: wt2, caption: "", category: "Worship Team"},
      { filename: wt3, caption: "", category: "Worship Team"},
      { filename: wt4, caption: "", category: "Worship Team"},
      { filename: wt5, caption: "", category: "Worship Team"},
      { filename: wt6, caption: "", category: "Worship Team"},
      { filename: wt7, caption: "", category: "Worship Team"},
      { filename: wt8, caption: "", category: "Worship Team"},
      { filename: wt9, caption: "", category: "Worship Team"},
      { filename: wt10, caption: "", category: "Worship Team"},
      { filename: wt11, caption: "", category: "Worship Team"},
      { filename: wt12, caption: "", category: "Worship Team"},
      { filename: wt13, caption: "", category: "Worship Team"},
      { filename: wt14, caption: "", category: "Worship Team"},
      { filename: wt15, caption: "", category: "Worship Team"},
      { filename: wt16, caption: "", category: "Worship Team"},
      { filename: wt17, caption: "", category: "Worship Team"},
      { filename: ptr1, caption: "", category: "Pastors", name: "Klark Macalino Dionisio", position: "(Youth Pastor)"},
      { filename: ptr2, caption: "", category: "Pastors", name: "Al Rey Afable", position: "(Catalyst Pastor)"},
      { filename: ptr3, caption: "", category: "Pastors", name: "Gelo Sangalang", position: "(Lead Pastor)"},
      { filename: ptr4, caption: "", category: "Pastors", name: "Pastor. Jerico", position: "(Mentors Pastor)"},
      { filename: ptr5, caption: "", category: "Pastors", name: "Veemar Fuggan", position: "(Couples Pastor)"},
     
    ],
    filteredImages: [],
  };

  componentDidMount() {
    this.setState({ filteredImages: this.state.images });
  }

  filterImages = (category) => {
    const filteredImages = this.state.images.filter(
      (image) => image.category === category
    );
    this.setState({ filteredImages, displayCount: 3 });  // Reset display count
  };
  showMore = () => {
    this.setState({ displayCount: this.state.displayCount + 5 }); // Increase display count
  };

  render() {
    const { filteredImages } = this.state;

    return (
      <><div className="logo">
        <h1>His Life City Metro</h1>
        </div><div>
          <div className="categories">
            {["Kidz Life", "Catalyst", "Worship Team", "Wildfire", "Pastors" ].map((category) => (
              <button key={category} onClick={() => this.filterImages(category)}>
                {category}
              </button>
            ))}
          </div>

          <div className="image-gallery">
            {filteredImages.map((image, index) => (
              <div key={index}>
                <img src={image.filename} alt={image.caption} />
                <div className="image-name">{image.name}
                  <div className="image-position">{image.position}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
    
        
        </>

    );
  }
}

export default ImageGallery;
