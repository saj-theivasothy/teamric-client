import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './styles/feedback.scss'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10), 
  },
   
  like: {
    color: 'teal',
    width: '1.5em',
    margin: '25px auto',

  }
}));

 
function FeedbackSummary() {
  const classes = useStyles();
  return <section class='wrapper flex-row flex-row-end'>
    <div class="flex flex-row">
      <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" className={classes.large} />
      <div>
      <h6>Full Name</h6>
      <p>Designation</p>
      </div>
    </div>
    <div class="score flex-row">
      <div class='flex flex-column'>
        <p class="scorep">Average Score</p>
        <div class='flex-row'>
          <h6 class="number">4.5</h6>
          <div class="stars flex-row">
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarHalfIcon/>
          </div>
        </div>
      </div>
    </div>
    <div>
      <FavoriteIcon className={classes.like}/>
  </div>
</section>
}

export default FeedbackSummary;