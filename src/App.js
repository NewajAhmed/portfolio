import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import {useSpring, animated} from 'react-spring';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import cardImg1 from "./image/react.png"

const particleOpt = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800

      }
    }
  }
}
const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);


    
  



  


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(20),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#3c6382',
  },
}));
// card
const useStyles2 = makeStyles({
  card: {
    maxWidth: 345,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}


function App() {
const props = useSpring({opacity: 2, from: {opacity: -6}})


const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes2 = useStyles2();

  return (
    <div className="App">
      <div className='particle'>

        
        <Particles
          params={particleOpt}

        />
      </div>

      <div className="navbar" >

        <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#p">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="sign" >NewajAhmed</div>
      </div>

      <div className="img_placeholder" id="home" >
      </div>

      <animated.div style={props} className="intro">

        <h1>
          Hi! I am Newaj, a Front-end Web-developer,based in Vancouver.
          
     </h1>
     <br></br>
     <br></br>

      </animated.div >
      <div id="p">
        <h1  className="p1">
          Portfolio
        </h1>
      </div>
      
      <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Project 1" />test
          <AntTab label="Project 2" />
          <AntTab label="Project 3" />
        </AntTabs>

        
        <TabPanel value={value} index={0}>
          <Card className={classes2.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="React"
                height="140"
                image={cardImg1}
                title="React"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 My React Group Project
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Brick House Project
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href="https://github.com/eastend-street/brickhouse" size="small" color="primary">
                Click
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </TabPanel>

        
        <Typography className={classes.padding} />
      </div>
      

      
    </div>
    <div>

     <h1  id="about" className="info">
       About
       
       </h1> 
    </div>
    <div class="content">
      <h1>I am  Newaj a cool Web-Developer. I am ambitious and expanding my Vast Variety of Skills.</h1>
      <h1>
        Date of Birth: 1998/01/07 <br></br>
        Email: newajpluto@gmail.com<br></br>
        Phone:2368861588
      </h1>
      <h1>
      Computer science
Cornerstone International Community College - Vancouver, BC
May 2019 to Present
Engineering Science
Fraser International College - Burnaby, BC
April 2017 to October 2018

<h3>
SKILLS <br></br>
•	HTML , CSS, Javascript, React<br></br>

•	Team work- Ability to work as a part of a team to achieve a common objective <br></br>
 
•	Punctuality- Available at work place before time and work without any or with minimal absences.<br></br> 
 
•	IT skills- Able to work with new technological accessories. Basic knowledge of computer and it's application.<br></br> 
 
•	Communication Skills: Leadership skill, effective communication skills, able to conserve with wide range of people. Enjoys listening. Able to talk in English, Bengali. 

</h3>

      </h1>

  
</div>

<div>

<h1 id="contact" className="information">
  Contact
</h1>
</div>


<div className="container">
        <form action="/action_page.php">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}} defaultValue={""} />
          <input type="submit" defaultValue="Submit" />
        </form>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <footer className="copyRight">&copy; 2019 Newaj Ahmed All Rights Reserved</footer>










    </div>

    
    
    





  );
}

export default App;
