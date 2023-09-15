import { Typography } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carroussel from "./Carousel";
import "../styles/FeaturedProducts.css";

function FeaturedProducts() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://media.istockphoto.com/id/1491778802/photo/dog-show.jpg?s=612x612&w=0&k=20&c=9Eog07RGiiHPl3P2SY8bDpDyDMQs3fWiDW7BGEqHCrg="
          imageDescp="Dogs"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://media.istockphoto.com/id/1318898744/photo/details-with-the-interaction-between-a-belgian-malinois-trained-dog-and-his-owner.jpg?s=612x612&w=0&k=20&c=2aE2xdeKuqbrdG1vVeBLBQ7W9DLo5B8CSufpstyxSkk="
          imageDescp="Dogs"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://media.istockphoto.com/id/1206050754/photo/pet-portraits.jpg?s=612x612&w=0&k=20&c=gT5fiM8sHhJ67Xb7PGkFhkuIod3eKRmbTRqcYAn9trU="
          imageDescp="Dogs"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://media.istockphoto.com/id/1343663569/photo/shot-of-a-man-playing-with-his-adorable-german-shepherd-at-the-park.jpg?s=612x612&w=0&k=20&c=EwpNdCQJuZiHNHcid-vV7VEpkhMCgalMli8jaKL8r0w="
          imageDescp="Dogs"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://media.istockphoto.com/id/576599730/photo/german-shepherd-dog.jpg?s=612x612&w=0&k=20&c=PZGlOvWEdEh0HlBMyckEiSbdWsRJpf_Ei27510FuuC4="
          imageDescp="Dogs"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://media.istockphoto.com/id/462071391/photo/veterinarian-hugging-and-calms-the-german-shepherd-dog.jpg?s=612x612&w=0&k=20&c=bFBrn7H1Toi8rgWLusfYYzrvvlbmSJvmnr6JGuAX0MY="
          imageDescp="Dogs"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imageLink="https://media.istockphoto.com/id/1283181810/photo/a-dog-with-one-ear-faithfully-looks-into-the-eyes-of-its-owner.jpg?s=612x612&w=0&k=20&c=ZVAqrEQ7lgghBt_vHs9XwtBVI9TNVhR6rKi1OBh3jms="
          imageDescp="Dogs"
        />
      ),
    },
  ];
  return (
    <div className="featuredProducts">
      <Typography className="featuredProductsHeading">
        Featured Products
      </Typography>
      <Typography className="featuredProductsSubHheading">
        Explore and discover a variety of products
      </Typography>
      <Carroussel
        cards={cards}
        height="300px"
        width="50%"
        margin="0 auto"
        offset={200}
        showArrows={false}
      />
    </div>
  );
}

export default FeaturedProducts;
