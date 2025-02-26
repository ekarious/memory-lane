"use client";

import CubeSVG from '@/assets/cube.svg';
import { Burger, Container, Group, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import UserMenu from "@/components/UserMenu/UserMenu";
import { User } from "@/types/users";
import Image from 'next/image'

interface Props {
  user: User
}

export default function Header(props: Props) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="xl">
        <Group justify="space-between">
          <Flex justify={"flex-start"} align={"center"} columnGap={15}>
            <Image src={CubeSVG} alt="Icon" height={32} />
            <h1 id={classes.logo}>Memory Lane</h1>
          </Flex>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

          <UserMenu user={props.user} />
        </Group>
      </Container>
    </div>
  );
}
