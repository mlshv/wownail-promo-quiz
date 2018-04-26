import styled from 'styled-components'
import instagram from 'resources/instagram.svg'
import vk from 'resources/vk.svg'

const Icon = styled.img`
    height: 18px;
    margin: 0 6px;
`

export const InstaIcon = () => <Icon src={instagram} />

export const VkIcon = () => <Icon src={vk} />