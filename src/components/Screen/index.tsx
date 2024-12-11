import ackoLogo from '../../assets/logo.svg'

export interface ScreenProps {
  value: number;
}

export const Screen:React.FC<ScreenProps> = ({ value }) => {
    return (
      <div style={{
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid #F0F0F0',
        borderTop: '1px solid #F0F0F0',
        borderRight: '1px solid #F0F0F0'
      }}>
        <a href="https://acko.com" target="_blank">
          <img src={ackoLogo} className="logo_acko" alt="Logo" />
        </a>
        <div style={{ flex: 1 }}>
          {value === 0 && <div>Home</div>}
          {value === 1 && <div>Search</div>}
          {value === 2 && <div>Favorites</div>}
          {value === 3 && <div>Profile</div>}
        </div>
      </div>
    )
}