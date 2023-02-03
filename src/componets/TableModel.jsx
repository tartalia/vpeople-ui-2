//Componente retirado de uma biblioteca chamada Mui ( https://mui.com/material-ui/react-table/ ) e adaptado para utilização mais adequada à plataforma

//Importação de componentes e bibliotecas
import * as React from 'react';
import PropTypes from 'prop-types';

import {
  Box,Checkbox, FormControlLabel, Paper, Table, TableBody, 
  TableCell, TableContainer, TableHead, TablePagination, TableRow, 
  alpha, TableSortLabel, Toolbar, Typography, IconButton, Tooltip, Switch
  } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

//Cria o componente com suas variáveis e referenciando as informações necessárias
function TableModel({displayCount,title,columnsName}) {
  
  //Variáveis necessárias para a criação de novas colunas (Adicionar novas colunas em 'cols' e em 'createData' (tanto nos parâmetros da função quanto no que ela retorna))
  var cols = ['col1','col2','col3','col4','col5','col6']
  var columnId

  function createData(name, col1, col2, col3, col4, col5, col6) {
    return {
      name,
      col1,
      col2,
      col3,
      col4,
      col5,
      col6
    };
  }

  //Conteúdo de exemplo/teste para a tabela
  const rows = [
    createData('Cupcake', 'Ativo: Entregue', '3.7', 67, 4.3),
    createData('Donut', 'Ativo: Entregue','25.0', 51, 4.9),
    createData('Eclair', 'Ativo: Não iniciado', '16.0', 24, 6.0),
    createData('Frozen yoghurt', 'Ativo: Em processo', '6.0', 24, 4.0),
    createData('Gingerbread', 'Ativo: Entregue', '16.0', 49, 3.9),
    createData('Honeycomb', 'Ativo: Em processo', '3.2', 87, 6.5),
    createData('Ice cream sandwich', 'Ativo: Não iniciado', '9.0', 37, 4.3),
    createData('Jelly Bean', 'Ativo: Entregue','0.0', 94, 0.0),
    createData('KitKat', 'Ativo: Não iniciado', '26.0', 65, 7.0),
    createData('Lollipop', 'Ativo: Não iniciado', '0.2', 98, 0.0),
    createData('Marshmallow', 'Ativo: Em processo', '0', 81, 2.0),
    createData('Nougat', 'Ativo: Em processo','19.0', 9, 37.0),
    createData('Oreo', 'Ativo: Entregue', '18.0', 63, 4.0),
  ];
  
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
  // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
  // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
  // with exampleArray.slice().sort(exampleComparator)
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const headCells = [
    {
      id: 'name',
      disablePadding: true,
      label: 'Nome',
    },
  ];

  columnsName.map((Item) => {
    headCells.push({id:Item,disablePadding:false,label:capitalizeFirstLetter(Item)})
  })
  
  function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
    
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  function EnhancedTableToolbar(props) {
    const { numSelected } = props;

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {title}
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  }

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('status');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(displayCount);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;  

  return(
      <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
              <EnhancedTableToolbar numSelected={selected.length} />
              <TableContainer sx={{maxHeight:"25rem"}}>
              <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={dense ? 'small' : 'medium'}
                  stickyHeader aria-label="sticky table"
              >
                  <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                  />
                  <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                      const isItemSelected = isSelected(row.name);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                          <TableRow
                          hover
                          onClick={(event) => handleClick(event, row.name)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.name}
                          selected={isItemSelected}
                          >
                          <TableCell padding="checkbox">
                              <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                  'aria-labelledby': labelId,
                              }}
                              />
                          </TableCell>
                          <TableCell
                              component="th"
                              id={labelId}
                              scope="row"
                              padding="none"
                          >
                              {row.name}
                          </TableCell>
                          {                                                     
                            columnsName.map((item,index) => (

                              columnId = cols[index],

                              <TableCell align="middle">{row[columnId]}</TableCell>
                            ))
                          }
                          </TableRow>
                      );
                      })}
                  {emptyRows > 0 && (
                      <TableRow
                      style={{
                          height: (dense ? 33 : 53) * emptyRows,
                      }}
                      >
                      <TableCell colSpan={6} />
                      </TableRow>
                  )}
                  </TableBody>
              </Table>
              </TableContainer>
              <TableContainer sx={{display:'flex',justifyContent:'space-between'}}>
                  <FormControlLabel
                  control={<Switch checked={dense} onChange={handleChangeDense} />}
                  label="Dense padding"
                  sx={{paddingLeft:"1rem"}}
                  />
                  <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  sx={{width:"25rem"}}
                  />
              </TableContainer>
              
          </Paper>
          
      </Box>
  )
}

export default TableModel;

// Para saber mais sobre o respectivo componente e outros disponibilizados pela biblioteca, acesse: https://mui.com/