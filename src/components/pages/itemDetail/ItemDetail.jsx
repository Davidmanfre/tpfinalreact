import React from "react";
import Counter from "../../common/counter/Counter";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const ItemDetail = ({ item, onAdd, totalItems }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              ${item.price}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              ya tienes {totalItems} unidades en el carrito
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Counter onAdd={onAdd} stock={item.stock} totalItems={totalItems} />
    </div>
  );
};

export default ItemDetail;

// <div>
// <h1>{item.title}</h1>
// <h2>{item.description}</h2>
// <h3>{item.price}</h3>
// <img src={item.image} alt={item.title} />
// <Counter />
// </div>
