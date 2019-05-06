import React, { useState, useEffect } from "react";
import Carousel from "components/Carousel";
import { MDBBtn, MDBCard, MDBCardBody, MDBListGroup, MDBListGroupItem, MDBCol, MDBIcon,MDBCardTitle } from 'mdbreact';
import {Map} from "components/Map";
import {Modal} from "components/Equipement"
import './home.scss'
import { useStore, useActions } from 'store'
import { Infos } from "components/Infos"

export const Home = () => {
  const modal = useStore( state => state.app.modal)
  const setModal = useActions( actions => actions.app.setModal)

  useEffect(() => {
    console.log('ok');
  }, [])

  return (
    <>
      <Modal />
      <Carousel/>
      <MDBCol md="12">
        <MDBCard style={{ marginTop: "-53px" }}>
          <MDBCardBody>
            <Map />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="12">
        <MDBCard className="list-equipement">
          <MDBCardBody>
          <MDBCardTitle>Appartement Saint Raphaël</MDBCardTitle>
            <MDBListGroup className="list">
              <MDBListGroupItem className="list-item">
                <MDBIcon icon="home"  />  Logement: 40 m²
              </MDBListGroupItem>
              <MDBListGroupItem className="list-item">
                <MDBIcon icon="warehouse"  />  Garage: 1
              </MDBListGroupItem>
              <MDBListGroupItem className="list-item">
                <MDBIcon icon="user-friends"  />  Nombre de voyageurs: 1-4
              </MDBListGroupItem>
              <MDBListGroupItem className="list-item">
                <MDBIcon icon="bed"  />  Couchages: 2
              </MDBListGroupItem>
              <MDBListGroupItem className="list-item">
                <MDBIcon icon="door-open"  />  Chambre: 1
              </MDBListGroupItem>
              <MDBListGroupItem className="list-item">
                <MDBIcon icon="bath"  />  Salle de bain: 1
              </MDBListGroupItem>
            </MDBListGroup>
            <MDBBtn 
              onClick={() => setModal(true)} 
              className="equipement"
              color='dark'
            >Tous les équipements
            </MDBBtn>
            <MDBCardTitle className="contact">Pour plus d'informations contactez Mme Picard :</MDBCardTitle>
            <MDBCardTitle className="contact">06 62 47 16 60</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <Infos/>
    </>
  )
}
