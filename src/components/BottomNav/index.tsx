import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

export interface BottomNavProps {
  value: number;
  setValue: (_value: number) => void;
}

export const BottomNav:React.FC<BottomNavProps> = ({ value, setValue }) => {
  return (
    <BottomNavigation
      value={value}
      onChange={(_event, newValue) => setValue(newValue)}
      style={{ width: '100%', border: '1px solid #F0F0F0' }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon  />}
        style={{
          color: 'rgb(89, 32, 197)',
          borderRight: '1px solid #F0F0F0'
        }}
      />
      <BottomNavigationAction
        label="Search"
        icon={<SearchIcon />}
        style={{
          color: 'rgb(89, 32, 197)',
          borderRight: '1px solid #F0F0F0'
        }}
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon />}
        style={{
          color: 'rgb(89, 32, 197)',
          borderRight: '1px solid #F0F0F0'
        }}
      />
      <BottomNavigationAction
        label="Profile"
        icon={<PersonIcon />}
        style={{
          color: 'rgb(89, 32, 197)'
        }}
      />
    </BottomNavigation>
  )
}

export default BottomNav;