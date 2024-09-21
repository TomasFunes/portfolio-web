import { Menu, MenuButton, MenuItems, MenuItem, MenuSeparator, MenuSection, MenuHeading } from '@headlessui/react'
import {
  Bars3Icon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'
import { Fragment } from 'react/jsx-runtime'

const links = [
    { href: 'https://github.com/tomasfunes', label: 'GitHub', icon: ArrowTopRightOnSquareIcon},
    { href: 'https://www.linkedin.com/in/tofun/', label: 'Linkedin', icon: ArrowTopRightOnSquareIcon },
    { href: 'mailto:tomasfunes99@gmail.com', label: 'Mail', icon: ArrowTopRightOnSquareIcon },
]

const innerLinks = [
    { href: '#about', label: 'Sobre mí'},
    { href: '#web-projects', label: 'Proyectos web'},
    { href: '#other', label: 'Otras actividades'},
]

export default function Header() {

  return (
    <div className='flex justify-between items-center bg-blue-950 text-white'>
        <h1 className='text-xl font-bold ml-4'>Tomás Funes | Portfolio</h1>
        <Menu>
            <MenuButton as={Fragment}>
                {({ active }) => <button className={((active) ? "bg-blue-900" : "") + " w-16 h-16" }><Bars3Icon className='w-8 h-8 m-auto justify-self-end'/></button>}
            </MenuButton>
            <MenuItems 
            anchor="bottom"
            transition
            className="origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 w-52 bg-blue-950 text-white p-2 lg:w-1/3"
        >
        <MenuSection>
            <MenuHeading className='text-sm pb-1 opacity-80'>Contacto</MenuHeading>
        {links.map((link) => {
            return (
                <MenuItem key={link.href}>
                    <button className='w-full text-left data-[focus]:bg-blue-900  flex py-1'
                        onClick={() => window.open(link.href, '_blank', 'noopener,noreferrer')}
                    >
                        <p className='flex-1'>{link.label}</p>
                        <ArrowTopRightOnSquareIcon className='w-4 h-4 m-auto'/>
                    </button>
                </MenuItem>
            )
        })}
        </MenuSection>

        <MenuSeparator className='my-1 h-px bg-black'/>

        <MenuSection>
            <MenuHeading className='text-sm pb-1 opacity-80'>En esta página</MenuHeading>
            {innerLinks.map((link) => {
                return (
                    <MenuItem key={link.href}>
                        <button className='w-full text-left data-[focus]:bg-blue-900  flex py-1'>{link.label}</button>
                    </MenuItem>
                )
            })}
        </MenuSection>
        </MenuItems>
      </Menu>
    </div>
    )
}
