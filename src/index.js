import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layouttest from './components/Test/Layouttest';
import Layout from './Layout';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,

} from "react-router-dom";
import FooterPage from "./Pages/FooterPage"


ReactDOM.render(
    <React.StrictMode>
        <div style={{ height: "100px", }} >
            <Layout />
            <Router>
                <FooterPage />
            </Router>
        </div>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// <Layouttest 
//     tabs={[
//       {
//           tabName: "Member Details",                                
//           tabContent: (
//             <h1> inject you'r  component here  </h1>
//           )
//       },
//       {
//           tabName: "Claim Details",

//           tabContent: (
//               <h1>Tab ___ 2 </h1>
//           )
//       },
//       {
//           tabName: "Hospital Details",
//           tabContent: (
//               <h1>Tab __ 3</h1>
//           )
//       },


//       {
//           tabName: "Hospital Details",
//           tabContent: (
//               <h1>Tab __ 4</h1>
//           )
//       },
//       {
//           tabName: "Hospital Details",
//           tabContent: (
//               <h1>Tab __ 5</h1>
//           )
//       },
//       {
//           tabName: "Hospital Details",
//           tabContent: (
//               <h1>Tab __ 5</h1>
//           )
//       },
//       {
//           tabName: "Hospital Details",
//           tabContent: (
//               <h1>Tab __ 5</h1>
//           )
//       },
//       {
//           tabName: "Hospital Details",
//           tabContent: (
//               <h1>Tab __ 5</h1>
//           )
//       },
//       {
//           tabName: "Hospital Details",
//           tabContent: (
//               <h1>Tab __ 5</h1>
//           )
//       },
//       {
//           tabName: "Hospital Details",
//           tabContent: (
//               <h1>Tab __ 5</h1>
//           )
//       },
//       {
//           tabName: "Hospital Details",
//           tabContent: (
//               <h1>Tab __ 5</h1>
//           )
//       },


//   ]}







//     />