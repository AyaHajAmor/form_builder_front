import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import EmailIcon from '@material-ui/icons/Email';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import CheckBoxIcon from '@material-ui/icons/CheckBox'; 
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const intialInput ={
  question :'',
  idform:'',
  options:[],
  type:''
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function ToolBox() {
  const[input,setInput] = useState(intialInput)
  const classes = useStyles();
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <b>Nested List Items</b>
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button type="Input_Text">
        <ListItemIcon>
          <TextFieldsIcon />
        </ListItemIcon>
        <ListItemText primary="Input Text" />
      </ListItem>
      <ListItem button type="Input_Number">
        <ListItemIcon>
          <FormatListNumberedIcon />
        </ListItemIcon>
        <ListItemText primary="Input Number" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Input Email" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ArrowDropDownCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Dropdown" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <CheckBoxIcon />
        </ListItemIcon>
        <ListItemText primary="CheckBoxes" />
      </ListItem>
      <ListItem button >
        <ListItemIcon>
          <CheckCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Multiple Choice" />
      </ListItem>
    </List>
  );
}