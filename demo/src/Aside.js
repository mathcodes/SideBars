import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import Switch from 'react-switch';
import { FaTachometerAlt, FaGem  } from 'react-icons/fa';
import {  FaList, FaGithub, FaRegLaughWink, FaHeart, FaSignOutAlt, FaRegStickyNote, FaRegCheckSquare, FaLink, FaFlag, FaFontAwesomeFlag, FaVideo } from 'react-icons/fa';
import sidebarBg from './assets/tracksun.png';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar, handleCollapsedChange }) => {
  const intl = useIntl();
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {intl.formatMessage({ id: 'sidebarTitle' })}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
          >
            {intl.formatMessage({ id: 'dashboard' })}
          </MenuItem>
          
          <MenuItem icon={<img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Google_Earth_icon.svg"></img>}> {intl.formatMessage({ id: 'Videos' })}</MenuItem>
          <MenuItem icon={<img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"></img>}> {intl.formatMessage({ id: 'Tasks' })}</MenuItem>
          <MenuItem icon={<img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Wikimania2019_moose_icon.svg"></img>}> {intl.formatMessage({ id: 'Goals' })}</MenuItem>
          <MenuItem icon={<img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Stack_Exchange_icon.svg"></img>}> {intl.formatMessage({ id: 'Notes' })}</MenuItem>
          <MenuItem icon={<img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Icon_tools_red.svg" height="35px"></img>}> {intl.formatMessage({ id: 'Links' })}</MenuItem>
          <MenuItem icon={<img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Tango_style_Mushroom%2BUser_icon.svg" height="35px"></img>}> {intl.formatMessage({ id: 'Sign Out' })}</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={intl.formatMessage({ id: 'withSuffix' })}
            icon={<FaRegLaughWink />}
          >
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={intl.formatMessage({ id: 'withPrefix' })}
            icon={<FaHeart />}
          >
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />}>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
    <h3>J o b I n S i g h t © 2021</h3> 
    
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
