
// import React from "react";
// import Card from "react-bootstrap/Card";

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";

// function Project() {
//   return (
//     <section id="projects" className="text-gray-400 bg-gray-900 body-font">
//       <div className="container px-5 py-10 mx-auto text-center lg:px-40">
//         <div className="flex flex-col w-full mb-20">
          
//           <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//             Why does the text start right at the top, being hidden behind the navbar? Need to increase the padding or something. 
//           </p>
//         </div>
//         <Row xs={1} md={2} lg={3} xl={4} className="g-4">
//           {Array.from({ length: 12 }).map((_, idx) => (
//             <Col>
//               <Card>
//                 <Card.Img
//                   variant="top"
//                   src="https://github.githubassets.com/images/modules/site/social-cards/github-social.png"
//                 />
//                 <Card.Body>
//                   <Card.Title>Card title</Card.Title>
//                   <Card.Text>
//                     With supporting text below as a natural lead-in to
//                     additional content.
//                   </Card.Text>
//                   {/* <Button variant="primary">CSS</Button>
//                   <Button variant="primary">JavaScript</Button>
//                   <Button variant="primary">React</Button> */}
//                   <Card.Link href="#">Card Link</Card.Link>
//                   <Card.Link href="#">Another Link</Card.Link>
//                 </Card.Body>
//                 <Button variant="primary">Go somewhere</Button>
//                 <Card.Footer className="text-muted">2 days ago</Card.Footer>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </section>
//   );
// }

// export default Project;

import "./projectcard.css";
import { Card } from "react-bootstrap";

function ProjectCard(props) {
  return (
    <div class="ui link cards">
      {props.projects.map((seed) => {
        return (
          <div classname="card">
            <Card.Body>
              <Card.Title>{seed.name}</Card.Title>
              <Card.Title>{seed.repo}</Card.Title>
              <Card.Text>{seed.description}</Card.Text>
              <Card.Text>{seed.role_needed} : Needed</Card.Text>
            </Card.Body>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCard;

