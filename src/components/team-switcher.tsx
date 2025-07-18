"use client"

import * as React from "react"
import Image from 'next/image';

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { PanelLeftClose } from 'lucide-react'

export function TeamSwitcher() {

    const { toggleSidebar } = useSidebar()
  return (
    <SidebarMenu>
      <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
               <Image
                    src="/hydralogo.png"
                    alt="Hydra Logo"
                    width={200}
                    height={200}
                    className="w-full h-auto max-w-[1.5rem] transition-all object-contain"
                />
              <div className="grid flex-1 text-left text-xl leading-tight">
                <span className="font-semibold text-[#a6d1eb]">
                  Hydra
                </span>
              </div>
              <div> <PanelLeftClose onClick={toggleSidebar} className="w-4 h-4"/></div>
            </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
