import React,{useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/TextInput";
import { List, withStyles} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {
        marginTop:100,
        maxWidth: 300,
        
    },
    table: {
        minWidth: 650,
      }
})
const Forms = ({classes, ...props}) =>{
    useEffect(()=> {
        props.fetchAllForms()
    },[])
    const fetchForm = id =>{
        console.log(id)
        props.fetchFormById()
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
            </List>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead  >
          <TableRow  >
            <TableCell >ID</TableCell>
            <TableCell >Title</TableCell>
            <TableCell >Description</TableCell>
            <TableCell >Get Form</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.FormList.map((record, index) => (
            <TableRow key={index}>
              <TableCell >{index}</TableCell>
              <TableCell component="th" scope="row">
                   {record.title}
              </TableCell>
              <TableCell >{record.description}</TableCell>
              <TableCell >
                  <Button size="small" color="primary" onClick={() => fetchForm()}>
                        <b>View Form</b>
                  </Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
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


export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Forms));