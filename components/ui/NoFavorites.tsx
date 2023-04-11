import { Container, Text } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container
    css={{
      display: "flex",
      flexDirection: "column",
      height: "calc(100vh-100px)",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    }}
  >
    <Text h1>No hay Favoritos</Text>
    <Image
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
      alt="ditto"
      width={250}
      height={250}
      style={{
        opacity: 0.1,
      }}
    />
  </Container>
  )
}
