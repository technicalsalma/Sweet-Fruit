import React from 'react';
import { Table } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
      <div className="container mt-5">
        <h4 className="mb-3">
          <i>1. Difference between javascript and nodejs:</i>
        </h4>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th className="text-center">javascript</th>
              <th className="text-center">nodejs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                Javascript is a programming language that is used for writing
                scripts on the website.
              </td>
              <td>NodeJS is a Javascript runtime environment.</td>
            </tr>
            <tr>
              <td>2</td>
              <td> Javascript can only be run in the browsers.</td>
              <td>
                We can run Javascript outside the browser with the help of
                NodeJS.n
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                Javascript is capable enough to add HTML and play with the DOM.
              </td>
              <td>Nodejs does not have capability to add HTML tags.</td>
            </tr>
            <tr>
              <td>4</td>
              <td> Javascript is used in frontend development.</td>
              <td>Nodejs is used in server-side development.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                It is the upgraded version of ECMA script that uses Chrome’s V8
                engine written in C++.
              </td>
              <td>Nodejs is written in C, C++ and Javascript.</td>
            </tr>
          </tbody>
        </Table>

        {/*========= second Question======== */}

        <div className="text-design">
          <h4 className="mb-2">
            <i>2 When should you use nodejs and when should you use mongodb?</i>
          </h4>
          <h6>
            <span className="text">Node.js Use: </span> Node. js is primarily
            used for non-blocking, event-driven servers, due to its
            single-threaded nature. It's used for traditional web sites and
            back-end API services, but was designed with real-time, push-based
            architectures in mind.So, if you want to write some kind of
            stand-alone program or server in Javascript, then you can use nodejs
            for it.
          </h6>
          <h6>
            <span className="text">MongoDB Use: </span> MongoDB is a technology
            that's revolutionizing database usage.If your application needs the
            ability to persistently store data in a way that you can efficiently
            query or update it later, then you would typically use some form of
            database.
          </h6>
        </div>

        {/*========= Third Question======== */}

        <div className="mt-5 mb-2">
          <h4>
            <i>3. Differences between sql and nosql databases:</i>
          </h4>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>SQL</th>
                <th> NoSQL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                <td>Non-relational or distributed database system.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  These databases have fixed or static or predefined schema
                </td>
                <td>They have dynamic schema</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Vertically Scalable</td>
                <td>Horizontally scalable</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Follows ACID property</td>
                <td>
                  Follows CAP(consistency, availability, partition tolerance)
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  These databases are not suited for hierarchical data storage.
                </td>
                <td>
                  These databases are best suited for hierarchical data storage.
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className='my-5'>
          <h4>4. What is the purpose of jwt and how does it work?</h4>
          <h6>
            JWT-JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server.JWT is an
            open standard used to share security information between two parties
            — a client and a server. Each JWT contains encoded JSON objects,
            including a set of claims. JWTs are signed using a cryptographic
            algorithm to ensure that the claims cannot be altered after the
            token is issued.It has one characteristic in particular that makes
            it a good tool for sending a user’s identity to a backend service.
            We can trust the integrity of a JWT because JWTs are signed, making
            them tamper-proof.
           <br></br>
          
          JWT is a string made up of three parts, separated by dots (.), and
          serialized using base64. In the most common serialization format,
          compact serialization.you will get two JSON strings:The header and the
          payload.header contains the type of token JWT in this case and the
          signing algorithm. Payload contains the claims. This is displayed as a
          JSON string, usually containing no more than a dozen fields to keep
          the JWT compact.
           </h6>
        </div>
      </div>
    );
};

export default Blog;