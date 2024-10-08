"use client";

import { Sidebar } from "flowbite-react";
import { HiShoppingBag} from "react-icons/hi";
import { MdMenu ,MdOutlineDashboard, MdOutlineSettings, } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { PiSignOutBold } from "react-icons/pi";
import './Sidebar.css';

export function LeftSidebar() {
  return (
    <Sidebar className="Sidebar" aria-label="Default sidebar example">
      <Sidebar.Items>

        <Sidebar.ItemGroup className="TopGroup">
          <Sidebar.Item href="#" icon={MdMenu} className="FirstItem">
            <span className="element-text">Navigation</span>
          </Sidebar.Item>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup className="BottomGroup">
          <Sidebar.Item href="#" icon={MdOutlineDashboard} className="BottomItem">
            <span className="element-text">Dashboard</span>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={LuClipboardEdit} className="BottomItem">
            <span className="element-text">Auditor</span>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={LuClipboardEdit} className="BottomItem">
            <span className="element-text">Builder</span>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiShoppingBag} className="BottomItem">
            <span className="element-text">Deployer</span>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={MdOutlineSettings} className="BottomItem">
            <span className="element-text">Settings</span>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={PiSignOutBold} className="LastItem">
            <span className="element-text">Log out</span>
          </Sidebar.Item>
        </Sidebar.ItemGroup>

      </Sidebar.Items>
    </Sidebar>
  );
}

export default LeftSidebar;
