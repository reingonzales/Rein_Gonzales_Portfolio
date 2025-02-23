import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const Cadavres = [
  "./Taggedpic/Cadavre Plot.png",
  "./Taggedpic/Cadavre Plot2.png",
  "./Taggedpic/Cadavre Plot3.png",
  "./Taggedpic/Cadavre Plot4.png",
  "./Taggedpic/Cadavre Plot5.png",
  "./Taggedpic/Cadavre Plot6.png",
];

const Charts = [
  "./A2 Pictures (Jpeg)/PavillionChart02.png",
  "./A2 Pictures (Jpeg)/TorusChart02.png",
  "./A2 Pictures (Jpeg)/SmiskiChart02.png",
  "./A2 Pictures (Jpeg)/Highpolymodel.png",
  "./A2 Pictures (Jpeg)/lowpolymodel.png",
 
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      1.0 CADAVRE EXQUIS: EVOLVING SELF
        <div class="three-model">
        <a href="./PORTFOLIO/Cadavre Main.png" target="_blank">
        <img src="./PORTFOLIO/Cadavre Main.png" id="model1" alt="Model 1 Image" />
        </a>

        
        </div>
        <div id="images-description">
          <div id="images">
   <a href="./Taggedpic/Cadavre Plot.png" target="_blank">
    <img src="./Taggedpic/Cadavre Plot.png" alt="cube1" />
  </a>
  <a href="./Taggedpic/Cadavre Plot2.png" target="_blank">
    <img src="./Taggedpic/Cadavre Plot2.png" alt="cube2" />
  </a>
  <a href="./Taggedpic/Cadavre Plot3.png" target="_blank">
    <img src="./Taggedpic/Cadavre Plot3.png" alt="cube3" />
  </a>
  <a href="./Taggedpic/Cadavre Plot4.png" target="_blank">
    <img src="./Taggedpic/Cadavre Plot4.png" alt="cube4" />
    </a>
  <a href="./Taggedpic/Cadavre Plot5.png" target="_blank">
    <img src="./Taggedpic/Cadavre Plot5.png" alt="cube4" />
    </a>
  <a href="./Taggedpic/Cadavre Plot6.png" target="_blank">
    <img src="./Taggedpic/Cadavre Plot6.png" alt="cube4" />
  </a>
</div>
          <h4 id="description">The gift of life is an impermanent, fleeting experience that gives us opportunities to create memories and embrace the present moment. Trusting our intuitions and pursuing what brings fulfillment, acts as a guide for helping us navigate uncertainty in our futures. It’s a reminder that discomfort is a sign of growth and change, reminding us that we hold the power to add meaningful memories and experiences to our lives. Collections of cultivated lessons, values and connections help shape our identities, becoming vital players in self-discovery and confidence in our unique journeys.</h4>
        </div>
      </div>
      
            
    <div id="project-row">
    2.0 INTEROP(erability)
        <div class="three-model">
       

          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
                </div>
        <div id="images-description">
          <div id="images">
   <a href="./A2 Pictures (Jpeg)/PavillionChart02.png" target="_blank">
    <img src="./A2 Pictures (Jpeg)/PavillionChart02.png" alt="cube1" />
  </a>
  <a href="./A2 Pictures (Jpeg)/TorusChart02.png" target="_blank">
    <img src="./A2 Pictures (Jpeg)/TorusChart02.png" alt="cube2" />
  </a>
  <a href="./A2 Pictures (Jpeg)/SmiskiChart02.png" target="_blank">
    <img src="./A2 Pictures (Jpeg)/SmiskiChart02.png" alt="cube3" />
  </a>
  <a href="./A2 Pictures (Jpeg)/Highpolymodel.png" target="_blank">
    <img src="./A2 Pictures (Jpeg)/Highpolymodel.png" alt="cube4" />
    </a>
  <a href="./A2 Pictures (Jpeg)/lowpolymodel.png" target="_blank">
    <img src="./A2 Pictures (Jpeg)/lowpolymodel.png" alt="cube4" />
    </a>
    <a href="./A2 Pictures (Jpeg)/reflection.png" target="_blank">
    <img src="./A2 Pictures (Jpeg)/reflection.png" alt="cube4" />
  </a>
            
          </div>
          <h4 id="description">By understanding and exploring file formats such as OBJ, FBX, STL and GLB, insights into interoperability were created and provided background into how these file types handle 3d Models when interchanging between Rhino and Blender.</h4>
        </div>
      </div>
     

    ${/* Model 2 commented out  
     <div id="project-row">
     Model 3 
          <div class="three-model">
            <div id="model3"></div>
          </div>
          <div id="images-description">
            <div id="images">
             ${Chart
                .map(
                  (Chart, index) => `<img src="${Chart}" alt="Chart${index + 1}" />`
                )
                .join("")}
              </div>
              <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
            </div>
          </div>
          */ ""}
        </section>


    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
// createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/a2/portfolio.obj");
// createThreeScene("#model3", "/3DModels/project3/cottage.obj");
