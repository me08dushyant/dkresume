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



class Portfolio extends LitElement {
  static get properties() {
    return { name: { type: String } , folioIndex: { type: String} ,  myBool :{type:Boolean}, cat:{type:String}, holderview:{type:Boolean}, }; 
	
  }

  constructor() {
    super();
    this.name = 'Image Comes Here';
	this.portImg = imgData;
	this.folioIndex='1';
	this.modelview = ['none', 'block'];
	this.togglenum = 1;
	
	this.myBool = false;
	this.imgPath;
	
	this.prop1 = 0;
    this.prop2 = 0;
	this.cat='img';
	
	const resume = document.querySelector('.resume');
	


	
	
  }
  
  


  
      static get styles() {
        return css`
      .gallery{
        display: grid;		 
        grid-template-columns: repeat(${this.folioIndex == 0  ?  3 :  4 } ,auto);
        grid-auto-rows: 350px 400px auto;
        grid-auto-flow:dense;
		height:100%;

      }



      .gallery > div > img { width:100%; height:100%; object-fit:cover;}
	  
	  .gallery > div > img:hover {opacity: 0.7;}
	  
	  @media screen and (max-width: 1440px) {
  .xgallery{
    display: grid;
    grid-template-columns: repeat(3,auto);
    grid-auto-rows: 350px ;
    grid-auto-flow:dense;

  }

}

.modal{
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 0px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
  
}      


.modelclose{
	display:none;
	
}


 .modal-content { width:100%; height:100%; object-fit:scale-down;}
 /* Modal Content (Image) 
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: clamp(500px, 700px);
  max-height: clamp(500px, 700px);
}
*/

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation - Zoom in the Modal */
.modal-content, #caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}

.holder-con{
	position: fixed; width: 100%; /* Full width */ height: 100%; /* Full height */ left: 0;  top: 0; grid-template-columns:2fr 8fr 10fr; display:grid;  grid-template-rows:auto;
   height: 100vh; pointer-events: none; 
	
}



.holder{
	
	  grid-column:2/-1;  
      background: black;
	  pointer-events: auto;
	 
	 
}

 @media screen and (max-width: 1280px) {
.holder{
	
	  grid-column:1/-1;  
      background: black;
	  pointer-events: auto;
	 
}	 
	 
 }
	  `;
    }
	
  render() {
	 	
	  
    return html`

	<div class="modelclose" >${this.cat =='img'  ? this.holderview = 0 : this.holderview = true }  </div>
	

 
	
	<div class="gallery">
      <div> <img id="myImg" src="${this.portImg[Number(this.folioIndex)].imgset[0]}"  @click="${this.handleClick}" ></div>
      <div> <img id="myImg"  src="${this.portImg[Number(this.folioIndex)].imgset[1]}" @click="${this.handleClick}"></div>
      <div style="grid-column:span 2;"> <img id="myImg" src="${this.portImg[Number(this.folioIndex)].imgset[2]}" @click="${this.handleClick}"></div>
      <div> <img id="myImg" src="${this.portImg[Number(this.folioIndex)].imgset[3]}" @click="${this.handleClick}"></div>
      <div> <img id="myImg" src="${this.portImg[Number(this.folioIndex)].imgset[4]}" @click="${this.handleClick}" "></div>
      <div> <img id="myImg" src="${this.portImg[Number(this.folioIndex)].imgset[5]}" @click="${this.handleClick}"></div>
      <div style="grid-column:span 2;"><img id="myImg" src="${this.portImg[Number(this.folioIndex)].imgset[6]}" @click="${this.handleClick}"></div>
      <div style="grid-column:span 2;"><img id="myImg" src="${this.portImg[Number(this.folioIndex)].imgset[7]}" @click="${this.handleClick}"></div>
      <div><img id="myImg" src="${this.portImg[Number(this.folioIndex)].imgset[8]}" @click="${this.handleClick}"></div>
      </div>
	  
	 
	  <div id="myModal" class="${this.myBool ? 'modal' : 'modelclose' } " >
	
  <!-- The Close Button -->
  <span class="close"   @click="${this.handleClick}">&times;</span>

  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img01" src="${this.imgPath}" >

  <!-- Modal Caption (Image Text) -->
  <div id="caption"></div>
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



customElements.define('port-folio', Portfolio);
