import { IconProps } from "phosphor-react"

export interface ListType {
    id: string, 
    name: string, 
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>, 
    subList?:{id: string, name: string}[]
}
