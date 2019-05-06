import React, { useState, useEffect } from "react";
import { MDBCard, MDBCardBody, MDBCol, MDBCardText, MDBCardTitle } from 'mdbreact';

import './infos.scss'
export const Infos = () => {
  return (
    <>
      <MDBCol md="2" sm="1">      
        <MDBCard className="infos">
          <MDBCardBody>
            <MDBCardTitle>Présentation</MDBCardTitle>
            <MDBCardText>
              Cosy T2 rénové par Architecte, Tout confort, Garage privé, Terrasse 20 M2 en RDC, à 2 MM à pied du Port, de la Plage, du Centre, au Calme. Linge de Lit, serviettes de bains, serviettes de plage fournies, ménage à l'arrivée et au départ.Cosy T2 rénové par Architecte, Tout confort, Garage privé,Terrasse 20 M2 en RDC, à 2 MM à pied du Port, de la Plage, du Centre, au Calme. Linge de Lit, serviettes de bains, serviettes de plage fournies, ménage à l'arrivée et au départ.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="2" sm="1">      
        <MDBCard className="infos">
          <MDBCardBody>
            <MDBCardTitle>Le logement</MDBCardTitle>
            <MDBCardText>
              La Cuisine Neuve est entièrement équipée : Lave Vaisselle, Four, Micro Onde, Plaque à induction, Machine à Café Expresso, bouilloire, grille Pain...Salle de Douche et une petite buanderie avec le Lave linge, rangements...La Terrasse exposée Sud/Ouest est couverte en Rez de jardin avec vue sur le jardin arboré.Television neuve 4K  grand écran 123 cm , Wifi + box. orange.Dans la chambre lit de 160/200 avec un très bon matelas Haut de Gamme Neuf.Canapé lit 140/190 Neuf avec un bon matelas Haut de Gamme.L'appartement a été entièrement repensé pour que vos vacances soient le plus agréable possible dans un environnement chaleureux.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="2" sm="1">      
        <MDBCard className="infos">
          <MDBCardBody>
            <MDBCardTitle>Accès aux voyageurs</MDBCardTitle>
            <MDBCardText>
              Vous profiterez d'un agréable appartement entièrement rénové . En rez de Chaussé vous êtes au calme et proche de toutes les commodités quotidiennes. Situé à la frontière entre Saint Raphaèl et Frégus. Vous pouvez arriver en train la gare est à 7 mm à pied.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="2" sm="1">      
        <MDBCard className="infos">
          <MDBCardBody>
            <MDBCardTitle>Accueil</MDBCardTitle>
            <MDBCardText>
              Nous vous accueillerons dés votre arrivée pour la remise des clés et l'inventaire. Nous pourrons vous guider et vous conseiller pour les bonnes adresses, les activités locales possibles...Si vous avez un soucis ou une demande nous vous laisserons nos coordonnées téléphoniques. Votre départ en matinée nous viendrons vous dire au revoir et récupérer les clés avec un inventaire.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="2" sm="1">      
        <MDBCard className="infos">
          <MDBCardBody>
            <MDBCardTitle>Le quartier</MDBCardTitle>
            <MDBCardText>
              Situé sur un emplacement idéal l'appartement vous permettra de vous rendre en 2 mm à pied à la plage, au vieux Port, au Centre de la ville. La Gare est à 7 mm à Pied. Toutes les commodités sont à votre porte. Plus besoin de voiture vous pourrez aussi visiter Saint Tropez et Sainte Maxime en bateau en partant du vieux Port. Le Marché le Dimanche en matinée et de Juillet à Août tous les jours en bort de mer jusqu'à 22H vous pourrez aussi vous y rendre à pied en 2 mm !!!de sortie.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="2" sm="1">      
        <MDBCard className="infos">
          <MDBCardBody>
            <MDBCardTitle>Déplacements</MDBCardTitle>
            <MDBCardText>
              Vous n'aurez plus besoin de votre voiture garée dans le garage au 1 er Sous-Sol. Vous pourrez profiter de toutes les infrastructures de Saint Raphael à Pied, vous déplacer aussi en Bateau.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  )
}
