"use client";

import { useState } from "react";
import {
  IconHeart,
  IconLogout,
  IconMessage,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import cx from "clsx";
import {
  Avatar,
  Group,
  Menu,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import classes from "./UserMenu.module.css";
import { User } from "@/types/users";

interface Props {
  user: User;
}

export default function UserMenu(props: Props) {
  const theme = useMantineTheme();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <>
      <Menu
        width={260}
        position="bottom-end"
        transitionProps={{ transition: "pop-top-right" }}
        onClose={() => setUserMenuOpened(false)}
        onOpen={() => setUserMenuOpened(true)}
        withinPortal
      >
        <Menu.Target>
          <UnstyledButton
            className={cx(classes.user, {
              [classes.userActive]: userMenuOpened,
            })}
          >
            <Group>
              {props.user.avatar && (
                <Avatar
                  src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/${props.user.avatar}`}
                  radius="xl"
                />
              )}

              {!props.user.avatar && (
                <Avatar color="cyan" radius="xl">
                  {props.user.firstName[0]}{props.user.lastName[0]}
                </Avatar>
              )}

              <div style={{ flex: 1 }}>
                <Text size="sm" fw={500}>
                  {props.user.firstName} {props.user.lastName}
                </Text>

                <Text c="dimmed" size="xs">
                  {props.user.status}
                </Text>
              </div>
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={
              <IconHeart size={16} color={theme.colors.red[6]} stroke={1.5} />
            }
          >
            Liked memories
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconStar size={16} color={theme.colors.yellow[6]} stroke={1.5} />
            }
          >
            Saved memories
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconMessage
                size={16}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            }
          >
            Your comments
          </Menu.Item>

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
            Account settings
          </Menu.Item>
          <Menu.Item
            leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}
          >
            Change account
          </Menu.Item>
          <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />}>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
