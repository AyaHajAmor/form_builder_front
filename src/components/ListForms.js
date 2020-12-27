import React,{useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/TextInput";
import { List, ListItem, withStyles} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    root: {
        marginTop:100,
        maxWidth: 300
    }
})

const Forms = ({classes, ...props}) =>{
    useEffect(()=> {
        props.fetchAllForms()
    },[])
    const fetchForm = id =>{
        props.fetchFormById()
        console.log("yeeeees")
    }
    return (
        <div>
        
            <List>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardContent >
                            <AddIcon fontSize="large"/>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <b>New Form</b>
                            </Button>
                        </CardActions>
                    </Card>
                    {
                    props.FormList.map((record, index)=>{
                        return (
                            <div key={index} onClick={fetchForm(record.id)}>
                                <ListItem>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {record.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                               {record.description}
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                <b>View Form</b>
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </ListItem>
                            </div>
                        )
                    })
                }
            </List>
            
        
        </div>
    )
}
const mapStateToProps = state => ({
    FormList : state.TextInput.list
}) 
const mapActionToProps = {
    fetchAllForms: actions.fetchAll,
    fetchFormById: actions.fetchById,
    deleteForm: actions.Delete
}


//props.fetchAllForms

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Forms));