import React, { useState } from 'react';
import {  Hidden, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import {  Button } from '@mui/material';
import data from '../../data';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: alpha(theme.palette.common.white, 0.99),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.99),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  border:'solid #e4e4e4 0.5px',
  borderRadius: '25px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'default',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

interface Product {
  id: string;
  img: string;
  title: string;
  desc: string;
  price: string;
  category: string;
  colors: string;
  type: string;
}

const NavLogin = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [filter, setfilter]=useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const searchText=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setfilter(event.target.value)
  }
 

  const handleMenuClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const filteredData = data.productData.filter((item) =>
        item.title.toLowerCase().includes(filter.toLowerCase())
      );
      setSearchResults(filteredData);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, overflow:'hidden',width: 1}}>
    <AppBar position="static" sx={{ background:'#DDE9FF',paddingRight:"20px",boxShadow:3}} >
      <Toolbar  sx={{ justifyContent: 'space-between' ,display:'flex'}}> 
      <img src='/logo.png' className='w-7 mr-3'/>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block',color:'#d4180f' ,width:'260px'} }}
          >
            FASHIONHOLIC
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={filter}
              onChange={searchText.bind(this)}
              onKeyPress={handleSearch}
            />
          </Search>
          <div className='flex items-center	 flex-row w-full text-black' >
          {searchResults.length > 0 ? (  
           
           searchResults.map((item:any,index:number) =>(
           <a href={item.link} className="w-auto m-4 border p-2 bg-white mt-5" key={index}>
           <img  src={item.img} alt={item.title} style={{ width: '50px', height: 'auto' }} />
           <h3>{item.title}</h3>
          </a>
          ))
          ) : (
            <p className='text-gray-200 text-xs	mr-2'>No results</p>
            )}
             {searchResults.length > 0 && (
          <Button variant="contained" color="error" className='h-10' onClick={() => setSearchResults([])}>
            Close
          </Button>
          )}
        </div>


          <Box sx={{ }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
            size="small"
            edge="start"
            color="default"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
           
            <Link to="/users" >
           <img src="about.png" className='w-8' alt="" />
           </Link>
            
          </IconButton>
          

          <IconButton size="large" aria-label="show 4 new mails" color="default">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="default"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
    
        <IconButton edge="end"  aria-haspopup="true" size="large" color="default" aria-label="account of current user" onClick={handleMenuClick}>
        <AccountCircle />
        </IconButton>
       </Box>
       
        <Menu anchorEl={anchorEl}  keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}><Link to="/homelogin/setting">Setting</Link></MenuItem>
          <MenuItem onClick={handleMenuClose}><Link to="/product">My Order</Link></MenuItem>
          <MenuItem onClick={handleMenuClose}><Link to="/homelogout">Log Out</Link></MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
    </Box>
   
    
  );
};

export default React.memo(NavLogin);
