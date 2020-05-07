import { LitElement, css , html } from 'https://unpkg.com/lit-element/lit-element.js?module';

const imgData = [
    {
    imgset: ["../images/8/1.jpg", "../images/8/2.jpg", "../images/8/3.jpg", "../images/8/4.jpg",
	"../images/8/5.jpg", "../images/8/6.jpg", "../images/8/7.jpg", "../images/8/8.jpg", "../images/8/9.jpg"],
    
  },
  
    {
    imgset: ["../images/8/1.jpg", "../images/8/2.jpg", "../images/8/3.jpg", "../images/8/4.jpg",
	"../images/8/5.jpg", "../images/8/6.jpg", "../images/8/7.jpg", "../images/8/8.jpg", "../images/8/9.jpg"],
    
  },
    {
    imgset: ["../images/8/1.jpg", "../images/8/2.jpg", "../images/8/3.jpg", "../images/8/4.jpg",
	"../images/8/5.jpg", "../images/8/6.jpg", "../images/8/7.jpg", "../images/8/8.jpg", "../images/8/9.jpg"],
    
  },
    {
    imgset: ["../images/8/1.jpg", "../images/8/2.jpg", "../images/8/3.jpg", "../images/8/4.jpg",
	"../images/8/5.jpg", "../images/8/6.jpg", "../images/8/7.jpg", "../images/8/8.jpg", "../images/8/9.jpg"],
    
  },
    {
    imgset: ["../images/8/1.jpg", "../images/8/2.jpg", "../images/8/3.jpg", "../images/8/4.jpg",
	"../images/8/5.jpg", "../images/8/6.jpg", "../images/8/7.jpg", "../images/8/8.jpg", "../images/8/9.jpg"],
    
  },
  
    {
    imgset: ["../images/9/1.jpg", "../images/9/2.jpg", "../images/9/3.jpg", "../images/9/4.jpg",
	"../images/9/5.jpg", "../images/9/6.jpg", "../images/9/7.jpg", "../images/9/8.jpg", "../images/9/9.jpg"],
    
  },
  
  
  
  
  
];


class Gallery extends LitElement {
  static get properties() {
    return { name: { type: String } }; 	
  }
  constructor() {
    super();
	this.name;
	
	
  }
  
  


  
 
	
  render() {
	 	
	  
    return html` 
  this is for gallery <div style=" backgroundColor:black; width:200px;" >
  gallery image goes here
  </div>
	  `;
	   }
  
 updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log(`${propName} changed. oldValue: ${oldValue}`);
    });

  }

  change() {
    return Math.floor(Math.random()*10);
  }


handleClick(e) {
   
	
	 this.myBool = !this.myBool;
	 console.log( e.target.src );
	 this.imgPath = e.target.src;
	
	 
	//this.myBool ? document.querySelector('myModal').className = 'modal' : document.querySelector('myModal').className = 'modelclose';
	//document.querySelector('myModal').className = 'modalclose';
	
	//document.getElementById("myModal").className = "modalclose";
  }
  
  clicked() {
	  this.myBool = !this.myBool;	  
	  
    console.log('clicked'   )
  
  
}

}

customElements.define('image-gallery',);
