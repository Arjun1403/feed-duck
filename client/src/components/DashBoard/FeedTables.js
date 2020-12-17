import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'nickname', label: 'Nick Name', minWidth: 170 },
  { id: 'time', label: 'Time', minWidth: 100 },
  {
    id: 'timePeriod',
    label: 'Environment',
    minWidth: 100,
    align: 'right',
    
  },
  {
    id: 'place',
    label: 'Place',
    minWidth: 100,
    align: 'right',
    
  },
  {
    id: 'country',
    label: 'Country',
    minWidth: 100,
    align: 'right',
    
  },
  {
    id: 'food',
    label: 'Food',
    minWidth: 100,
    align: 'right',
    
  },
  {
    id: 'foodType',
    label: 'FoodType',
    minWidth: 100,
    align: 'right',
    
  },
  {
    id: 'duckCount',
    label: 'Duck Feed',
    minWidth: 100,
    align: 'right',
    
  },
  {
    id: 'feedAmount',
    label: 'Feed Amount',
    minWidth: 100,
    align: 'right',
    
  },
];


const styles = theme => ({
    root: {
        backgroundColor: theme.palette.secondary.dark,
      },
    tablePagination: {
      },
    tablePaginationCaption: {
        color: 'white'
      },
    tablePaginationSelectIcon: {
        color: 'white'
      },
    tablePaginationSelect: {
        color: 'white'
      },
    tablePaginationActions: {
        color: 'white',
      },
    })

const useStyles = makeStyles({
  root: {
    width: '100%',
    alignItems:'center',
    alignSelf:'center',
    
    background:"#f4f4f4",
  },
  tablePaginationSelectIcon: {
    color: 'white'
  },
  container: {
    maxHeight: 440,
    
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows,setRows]=React.useState([]);

  React.useEffect( function getTableRows(){
    async function getAllRoes(){
        
        const tableResponse = await fetch('http://localhost:8080/survey', {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json());
    if (tableResponse['status'] == 200) {
        var tbRows=[];
        const tableValues = tableResponse['data']

        
        tableValues.map((eachRow)=>{
            var nickname=eachRow.nickname;            
            var time = eachRow.time;
            var timePeriod = eachRow.timePeriod;
            var place = eachRow.place;
            var country = eachRow.country;
            var food=eachRow.food;
            var foodType = eachRow.foodType;
            var duckCount = eachRow.duckCount;
            var feedAmount = eachRow.feedAmount;
            tbRows.push({nickname,time,timePeriod,place,country,food,foodType,duckCount,feedAmount});
            
        })
        setRows(tbRows);

    }

    }
    getAllRoes();

},[]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,background:"#0F293D",color:'#fff' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{color:'#0F293D'}}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        style={{background:'#0F293D',color:'#f4f4f4'}}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        classes={{
            root: classes.tablePagination,
            caption: classes.tablePaginationCaption,
            selectIcon: classes.tablePaginationSelectIcon,
            select: classes.tablePaginationSelect,
            actions: classes.tablePaginationActions,
          }}
      />
    </Paper>
  );
}
