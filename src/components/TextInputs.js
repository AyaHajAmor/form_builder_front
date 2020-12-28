import { List,Grid , Paper, withStyles,Button ,TextField } from "@material-ui/core";
import React,{useEffect,useState} from "react";
import { connect } from "react-redux";
import * as action from "../actions/Input"
import * as actions from "../actions/TextInput"
import useForm from "./useForm";
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import EmailIcon from '@material-ui/icons/Email';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import CheckBoxIcon from '@material-ui/icons/CheckBox'; 
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Text from "./Type/Text";
import Number from "./Type/Number";
import Radio from "./Type/Radio";
import Dropdown from "./Type/Dropdown";
import CheckBoxes from "./Type/CheckBoxes";
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const intialForm ={
    title:'',
    description:''
}

const styles = theme => ({
    paper :{
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    },
    '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      posBTN :{
          justifyContent :'center',
          width:"50%"
      },
      root: {
        width: '100%',
        paddingBottom:'5px',
        backgroundColor: theme.palette.background.paper,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
      input:{
          padding: theme.spacing(6),
      }
})

const TextInputs = ({classes, ...props}) =>{
 

  const[ListInput,setListInput] = useState([])
    
    const [option1 ,setOption1]= useState([])

    const addOption1 = ()=>{
        setOption1([...option1,''])  
    }
    const removeOption1 = ()=>{
        const values  = [...option1];
        values.splice(values.i, 1);
        setOption1(values);
    }
    const renderOption1 =() =>{
        return <React.Fragment> <Text placeholder={"option.."}/>  <Divider variant="middle" />  </React.Fragment>
    }

    const [option2 ,setOption2]= useState([])

    const addOption2 = ()=>{
        setOption2([...option1,''])  
    }
    const removeOption2 = ()=>{
        const values  = [...option2];
        values.splice(values.i, 1);
        setOption2(values);
    }
    const renderOption2 =() =>{
        return <React.Fragment> <Text placeholder={"option.."}/>  <Divider variant="middle" /> </React.Fragment>
    }

    const [option3 ,setOption3]= useState([])

    const addOption3 = ()=>{
        setOption3([...option1,''])  
    }
    const removeOption3 = ()=>{
        const values  = [...option3];
        values.splice(values.i, 1);
        setOption3(values);
    }
    const renderOption3 =() =>{
        return <React.Fragment> <Text placeholder={"option.."}/>  <Divider variant="middle" /> </React.Fragment>
    }

    const renderInput = type =>{
        switch (type) {
          case "Input_Text":
             return <React.Fragment> <Text placeholder={"question .."} />  <Divider variant="middle" />  </React.Fragment>;
          case "Input_Number":
            return <React.Fragment> <Text placeholder={"question .."}/> <Divider variant="middle" /></React.Fragment>;
          case "Input_Email":
            return <React.Fragment> <Text placeholder={"question .."}/> <Divider variant="middle" /> </React.Fragment>;
          case "Dropdown":
            return <React.Fragment> <Text placeholder={"question .."}/> 
                   <Text placeholder={"option .."}  /> 
                                {option1.map((i) => ( 
                                            <React.Fragment key={i}>
                                            {
                                                    renderOption1()
                                            }
                                            </React.Fragment> ))
                                }
                                <IconButton onClick={() => removeOption1()}>
                                <RemoveIcon />
                                </IconButton>
                                <IconButton onClick={() => addOption1()}>
                                <AddIcon  />
                                </IconButton>
            </React.Fragment>;
          case "CheckBoxes":
            return <React.Fragment> <Text placeholder={"question .."}/> 
                        <Text placeholder={"option .."}  /> 
                        {option2.map((i) => ( 
                                    <React.Fragment key={i}>
                                    {
                                            renderOption2()
                                    }
                                    </React.Fragment> ))
                        }
                        <IconButton onClick={() => removeOption2()}>
                           <RemoveIcon />
                        </IconButton>
                        <IconButton onClick={() => addOption2()}>
                           <AddIcon  />
                        </IconButton>
                    </React.Fragment>;
          case "Radio":
            return <React.Fragment> <Text placeholder={"question .."}/> 
                        <Text placeholder={"option .."}  /> 
                                    {option3.map((i) => ( 
                                                <React.Fragment key={i}>
                                                {
                                                        renderOption3()
                                                }
                                                </React.Fragment> ))
                                    }
                                    <IconButton onClick={() => removeOption3()}>
                                    <RemoveIcon />
                                    </IconButton>
                                    <IconButton onClick={() => addOption3()}>
                                    <AddIcon  />
                                    </IconButton>
            </React.Fragment>;
          default:
            break;
        }
    }

    const addInput = (type) => {
        setListInput([...ListInput , {question :'',
          idform:'',
          options:[],
          type:type
        }
        ])
    } 

    const validate =  ()=>{
        let temp ={...errors}
        temp.title = values.title?"":"This field is required ."
        temp.description = values.description?"":"This field is required ."
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x==="")
    }
    var {
        values,
        errors,
        setErrors,
        inputChange

    } = useForm(intialForm)

    useEffect(()=> {
        props.createInput()
    },[])
    const handleSubmit = e =>{
        e.preventDefault()
        const onSuccess =()=>{ window.alert('Added Successfuly')}
        if(validate())
        props.createForm(values,onSuccess)
        values.title=''
        values.description=''
        //console.log("test")
    }
    return (
        <Grid container >
           
            <Grid item xs={9}>
                <Paper elevation={3} className={classes.paper} >
                    <form  className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
                        <TextField 
                            id="standard-secondary" 
                            label="Add Title"
                            color="primary"
                            name="title" 
                            value={values.title}
                            onChange={inputChange}
                            {...(errors.title && {error:true,helperText:errors.title})}
                            />
                        <TextField 
                            id="standard-secondary" 
                            label="Add Description .."
                            color="primary" 
                            name="description"
                            multiline
                            rows={4}
                            fullWidth 
                            value={values.description}
                            onChange={inputChange}
                            {...(errors.description && {error:true,helperText:errors.description})}
                            />
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            type="submit"
                        >Save form 
                        </Button>
                    </form>
                </Paper>
                <Paper elevation={3} className={classes.paper} >
                    <List>
                       <form>
                       {
                        ListInput.map((input,i) => ( 
                        <React.Fragment key={i} className={classes.input}>
                        {
                                renderInput(input.type) 
                                
                        }
                        </React.Fragment> ))
                        }
                        <br></br> 
                        <Button 
                            variant="contained" 
                            color="primary" 
                            disableElevation
                            type='submit'
                            size="large"
                            >
                            Send
                        </Button>
                       </form>
                    </List>
                </Paper> 
            </Grid>
            
            <Grid item xs={3}>
                <Paper elevation={3}  className={classes.paper} >
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                            <b>ToolBoxes</b>
                            </ListSubheader>
                        }
                        className={classes.root}
                        >
                        <ListItem button onClick={()=> addInput("Input_Text")}>
                            <ListItemIcon>
                            <TextFieldsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Input Text" />
                        </ListItem>
                        <ListItem button onClick={() => addInput("Input_Number")}>
                            <ListItemIcon>
                            <FormatListNumberedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Input Number" />
                        </ListItem>
                        <ListItem button onClick={() => addInput("Input_Email")}>
                            <ListItemIcon>
                            <EmailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Input Email" />
                        </ListItem>
                        <ListItem button onClick={() => addInput("Dropdown")}>
                            <ListItemIcon>
                            <ArrowDropDownCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dropdown" />
                        </ListItem>
                        <ListItem button onClick={() => addInput("CheckBoxes")}>
                            <ListItemIcon>
                            <CheckBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="CheckBoxes" />
                        </ListItem>
                        <ListItem button  onClick={() => addInput("Radio")}>
                            <ListItemIcon>
                            <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Radio" />
                        </ListItem>
                    </List>
                </Paper>  
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({
    TextInputList: state.Input.listInput,
    FormList: state.TextInput.list
}) 
const mapActionToProps = {
    createForm : actions.create,
    createInput : action.createInput,
    DeleteInput : action.DeleteInput
}

//props.fetchAllTextInputs

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(TextInputs));

