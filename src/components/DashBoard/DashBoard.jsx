import React, { useEffect, useState } from 'react'
import { Breadcrumbs } from '@mui/material'
import { Link } from 'react-router-dom'
import { getRandom } from '../../services/adviceAPI'
import Carousel from '../Carousel/Carousel'
import "flickity/css/flickity.css";

function DashBoard() {

    const [picture, setPicture] = useState("undefined")
    const [updated, SetUpdated] = useState('')
    useEffect(()=> {
        (async () => {
        setPicture(getRandom())
        })()
    }, [updated])

    setInterval(()=> {
        SetUpdated(Math.random(2))
    }, 3000)

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" underline="hover" color="inherit">
          Login
        </Link>
        <Link to="/" underline="hover" color="inherit">
          Home
        </Link>
        <Link to="/" underline="hover" color="inherit">
          Dashboard
        </Link>{" "}
      </Breadcrumbs>
      <Carousel/>
    </>
  );
}

export default DashBoard