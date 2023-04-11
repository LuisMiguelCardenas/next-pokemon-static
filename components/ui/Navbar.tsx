import { Link as LinkIU, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        }
        alt="icono de la app"
        width={70}
        height={70}
      />

      <Link href="/" passHref legacyBehavior>
        <a style={{ display:"flex", alignItems:"baseline"}}>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </a>
      </Link>

      <Spacer css={{ flex: 1 }}></Spacer>

      <Link href="/favorites" passHref legacyBehavior style={{display:'flex'}}>
        <a>
          <Text color="white" h3>
            Favoritos
          </Text>
        </a>
      </Link>
    </div>
  );
};
