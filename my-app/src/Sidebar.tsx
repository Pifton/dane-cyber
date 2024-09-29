"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import './Sidebar.css';

export function LeftSidebar() {
  return (
    <Sidebar className="Sidebar" aria-label="Default sidebar example">
      <Sidebar.Items>

        <Sidebar.ItemGroup className="TopGroup">
          <Sidebar.Item href="#" icon={HiChartPie}>
            <span className="sidebar-item">Dashboard</span>
          </Sidebar.Item>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            <span className="sidebar-item">Kanban</span>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiInbox}>
            <span className="sidebar-item">Inbox</span>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiUser}>
            <span className="sidebar-item">Users</span>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiShoppingBag}>
            <span className="sidebar-item">Products</span>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            <span className="sidebar-item">Sign In</span>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiTable}>
            <span className="sidebar-item">Sign Up</span>
          </Sidebar.Item>
        </Sidebar.ItemGroup>

      </Sidebar.Items>
    </Sidebar>
  );
}

export default LeftSidebar;
