import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { chipData, addToCart } = props;
  return (
    <Card key={chipData.teamId} className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {chipData.teamId}
        </Typography>
        <Typography variant="h1" component="h2">
          {bull}
          {chipData.teamName}
          {bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`$${chipData.price} USD PER CHIP`}
        </Typography>
        <Typography variant="body2" component="p">
          <br />
          {`${chipData.remainingQuantity
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Chips Remaining`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={() => addToCart(chipData)}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
