"use client";

import { Avatar, Text, TimelineItem, Button } from "@mantine/core";
import { User } from "@/types/users";

interface Props {
  currentUser: User;
  state: {
    readonly open: () => void;
    readonly close: () => void;
    readonly toggle: () => void;
  };
}

export default function NewEventCollapsed(props: Props) {
  return (
    <TimelineItem
      title={`${props.currentUser.firstName} ${props.currentUser.lastName}`}
      bullet={
        <Avatar
          size={36}
          radius="xl"
          src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/${props.currentUser.avatar}`}
        />
      }
      lineVariant="dashed"
    >
      <Text c="dimmed" size="sm">
        {props.currentUser.status}
      </Text>

      <Button
        color="blue"
        size="xs"
        variant="light"
        fullWidth
        mt="lg"
        onClick={() => props.state.open()}
      >
        Share a memory
      </Button>
    </TimelineItem>
  );
}
