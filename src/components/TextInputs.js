import { List, ListItem ,Grid , Paper, withStyles,Button} from "@material-ui/core";
import React,{useEffect} from "react";
import { connect } from "react-redux";
import * as action from "../actions/Input"
import * as actions from "../actions/TextInput"
import ToolBox from "./ToolBox";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import useForm from "./useForm";
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
    })

const TextInputs = ({classes, ...props}) =>{
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
                    fullWidth 
                    color="primary" 
                    name="description"
                    multiline
                    rows={4}
                    value={values.description}
                    onChange={inputChange}
                    {...(errors.description && {error:true,helperText:errors.description})}
                    />
                    <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                >Save form </Button>
                </form>
                </Paper>
                
                <Paper elevation={3} className={classes.paper} >
                    <List>
                {
                    props.TextInputList.map((record, index)=>{
                        return (
                            <div key={index}>
                                <ListItem>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {record.question}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                               {record.description}
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </ListItem>
                            </div>
                        )
                    })
                }
                </List>
                </Paper> 
            </Grid>
            
            <Grid item xs={3}>
                <Paper elevation={3}  className={classes.paper} >
                     <ToolBox />
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

