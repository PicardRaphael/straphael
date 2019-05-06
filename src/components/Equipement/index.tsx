import React, { useState } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBListGroup, MDBIcon, MDBListGroupItem, MDBModalTitle } from 'mdbreact';
import { useStore, useActions } from 'store'
import './equipement.scss'
//@ts-ignore
export const Modal = () => {
  const modal = useStore( state => state.app.modal)
  const setModal = useActions( actions => actions.app.setModal)

  return (
    <MDBModal isOpen={modal}>
      <MDBModalHeader className="title" toggle={() => setModal(!modal)}>Équipements</MDBModalHeader>
      <MDBModalBody>
        <MDBListGroup className='title-group'>
          <h4 className="title-list">Standard</h4>
          <MDBListGroupItem className="list-item">
            <MDBIcon icon="snowflake"  />  Climatisation
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            <MDBIcon icon="wifi"  />  Connexion Ethernet / Wi-fi
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            <MDBIcon icon="hands-helping"  />  Équipements de base
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            <MDBIcon icon="fire-alt"  />  Chauffage
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            <MDBIcon icon="tv"  />  Télévision
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            <MDBIcon icon="tint"  />  Lave-linge
          </MDBListGroupItem>
        </MDBListGroup>
        <MDBListGroup className='title-group'>
          <h4 className="title-list">Accès des voyageurs</h4>
          <MDBListGroupItem className="list-item">
            Clés remises par l'hôte
          </MDBListGroupItem>
        </MDBListGroup>
        <MDBListGroup className='title-group'>
          <h4 className="title-list">Logistique</h4>
          <MDBListGroupItem className="list-item">
            Séjours longue durée autorisés
          </MDBListGroupItem>
        </MDBListGroup>
        <MDBListGroup className='title-group'>
          <h4 className="title-list">Installations</h4>
          <MDBListGroupItem className="list-item">
            Ascenseur
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Parking gratuit sur place
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Logement de plain-pied
          </MDBListGroupItem>
        </MDBListGroup>
        <MDBListGroup className='title-group'>
          <h4 className="title-list">Restaurations</h4>
          <MDBListGroupItem className="list-item">
            Cafetière
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Ustensiles de cuisine de base
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Vaisselle et couverts
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Lave-vaisselle
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Cuisine
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Four à micro-ondes
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Réfrigérateur
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Four
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Cuisinière
          </MDBListGroupItem>
        </MDBListGroup>
        <MDBListGroup className='title-group'>
          <h4 className="title-list">Chambre et salle de bain</h4>
          <MDBListGroupItem className="list-item">
            Draps
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Oreillers et couvertures supplémentaires
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Sèche-cheveux
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Cintres
          </MDBListGroupItem>
        </MDBListGroup>
        <MDBListGroup className='title-group'>
          <h4 className="title-list">Extérieur</h4>
          <MDBListGroupItem className="list-item">
            Barbecue
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Patio ou baclcon
          </MDBListGroupItem>
        </MDBListGroup>
        <MDBListGroup className='title-group'>
          <h4 className="title-list">Dispositif de sécurité</h4>
          <MDBListGroupItem className="list-item">
            Détecteur de fumée
          </MDBListGroupItem>
        </MDBListGroup>
        <MDBListGroup className='title-group title-off'>
          <h4 className="title-list">Non inclus</h4>
          <MDBListGroupItem className="list-item">
            Shampooing
          </MDBListGroupItem>
          <MDBListGroupItem className="list-item">
            Détecteur de monoxyde de carbone
          </MDBListGroupItem>
        </MDBListGroup>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="dark" onClick={() => setModal(!modal)}>Fermer</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  )
}
