import React from 'react';
import { 
    Container, 
    Title,
    Icon,
} from './styles';

interface HeaderProps {
    title: string
}

export function Header({title} : HeaderProps) {
    return (
        <Container>
            <Title>{title}</Title>
            <Icon name="logout" />
        </Container>
    );
}