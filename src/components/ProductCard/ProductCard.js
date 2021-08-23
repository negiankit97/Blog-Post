import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, Grid } from '@material-ui/core';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 100,
    height: 350,
    cursor: "pointer"
  },
  actionArea: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 14,
  },
  product: {
    fontSize: "14px",
    display: 'block',
    width: "100%",
    margin: theme.spacing(1, 0)
  },
  price: {
    textDecoration: "line-through"
  }
}));

export default function ProductCard(props) {
  const classes = useStyles();
  const [raise, setRaised] = useState(0);
  return (
    <Grid item xs={12} sm={3}>
        <Card
          className={classes.root}
          elevation={raise}
          onMouseOver={() => setRaised(3)}
          onMouseOut={() => setRaised(0)}
        >
          <CardActionArea className={classes.actionArea} component={Link} to={`/posts/${props.id}`}>
            <CardContent>
              <Typography className={classes.title} color="textPrimary" gutterBottom>
                {props.title}
              </Typography>
              <Typography className={classes.product} color="textSecondary">
                {props.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </Grid>
  );
}