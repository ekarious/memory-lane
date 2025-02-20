"use client";

import {
  Avatar,
  Timeline,
  Text,
  TimelineItem,
  Badge,
  Card,
  Image,
  CardSection,
  AspectRatio,
  Group,
  Title,
  ActionIcon,
} from "@mantine/core";
import { IconBookmark, IconShare3 } from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks';
import classes from "./Timeline.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Event, EventMode } from "@/types/events";
import { useModeStore } from "@/lib/storeProvider";
import NewEvent from "@/components/NewEvent/NewEvent";
import NewEventCollapsed from "../NewEventCollapsed/NewEventCollapsed";
import { User } from "@/types/users";

dayjs.extend(relativeTime);

interface Props {
  events: Event[];
  currentUser: User;
}

export default function TimelineComp(props: Props) {
  const [opened, handlers] = useDisclosure(false);
  const mode = useModeStore((state) => state.mode);

  // Change the events displayed based on the mode
  const displayedEvents: Event[] = props.events.filter((event) => {
    if (mode === EventMode.FAMILY) {
      return event.isFamily === true;
    }

    if (mode === EventMode.FRIENDS) {
      return event.isFriend === true;
    }

    return event;
  });

  return (
    <>
      <Timeline
        active={displayedEvents.length - 1}
        reverseActive
        lineWidth={2}
        bulletSize={36}
      >
        {/* Create your Event ! */}
        {opened && <NewEvent state={handlers} currentUser={props.currentUser} />}
        {!opened && <NewEventCollapsed state={handlers} currentUser={props.currentUser} />}

        {/* Timeline of events */}
        {displayedEvents &&
          displayedEvents.map((event: Event) => (
            <TimelineItem
              key={event.id}
              title={`${event.user.firstName} ${event.user.lastName}`}
              bullet={
                <Avatar
                  src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/${event.user.avatar}`}
                  radius="xl"
                  size={36}
                />
              }
            >
              <Group justify="space-between">
                <Text c="dimmed" size="sm">
                  {event.user.status}
                </Text>

                <Text c="dimmed" size="sm" ta="right">
                  {dayjs(event.createdAt).fromNow()}
                </Text>
              </Group>
              <Card shadow="sm" p="xs" radius="sm" withBorder mt={4} maw={450}>
                <CardSection>
                  <AspectRatio
                    ratio={
                      event.Attachments[0].width / event.Attachments[0].height
                    }
                  >
                    <Image
                      src={`/images/${event.Attachments[0].filename}${event.Attachments[0].extension}`}
                      alt={event.Attachments[0].title}
                    />
                  </AspectRatio>
                </CardSection>

                <Group justify="space-between" mt="md" mb="xs">
                  <Title order={1} size="h3" fz={18} fw={500}>
                    {event.title}
                  </Title>
                </Group>

                <Text size="sm" c="dimmed">
                  {event.description}
                </Text>
              </Card>

              <Group justify="space-between" mt="md">
                <Group justify="flex-start" gap={10}>
                  {event.isFamily && <Badge color="pink">Family</Badge>}
                  {event.isFriend && <Badge color="cyan">Friends</Badge>}
                </Group>

                <Group justify="flex-start" gap={10}>
                  <ActionIcon
                    variant="transparent"
                    color="gray.4"
                    aria-label="Bookmark"
                    className={classes.iconHover}
                  >
                    <IconBookmark />
                  </ActionIcon>
                  <ActionIcon
                    variant="transparent"
                    color="gray.4"
                    aria-label="Share"
                    className={classes.iconHover}
                  >
                    <IconShare3 />
                  </ActionIcon>
                </Group>
              </Group>
            </TimelineItem>
          ))}
      </Timeline>
    </>
  );
}
