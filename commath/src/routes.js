import React from "react";
import Main from "./Work/Main";


import Ex1 from "./Work/Ex1";
import Ex2 from "./Work/Ex2";
import Ex3 from "./Work/Ex3";
import Ex4 from "./Work/Ex4";
import Ex5 from "./Work/Ex5";
import Ex6 from "./Work/Ex6";


const routes = [

    {
        path: "/",
        element: <Main />,
      },
    {
        path: "/main",
        element: <Main />,
      },
    {
      path: "/projecteror-math",
      element: <Main />,
    },


    {
      path: "/Ex1",
      element: <Ex1 />,
    },


    {
        path: "/Ex2",
        element: <Ex2 />,
      },


      {
        path: "/Ex3",
        element: <Ex3 />,
      },


      {
        path: "/Ex4",
        element: <Ex4 />,
      },


      {
        path: "/Ex5",
        element: <Ex5 />,
      },


      {
        path: "/Ex6",
        element: <Ex6 />,
      }
  ];

export default routes;