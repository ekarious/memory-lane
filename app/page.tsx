import { Container, Center } from "@mantine/core";
import ModeSwitcher from "@/components/ModeSwitcher/ModeSwitcher";
import TimelineComp from "@/components/Timeline/Timeline";
import { Event } from '@/types/events';
import { User } from '@/types/users';

export default async function HomePage() {
  const resEvents = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/memories`);
  const dataEvents: { events: Event[] } = await resEvents.json();

  const resCurrentUser = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/6`);
  const dataCurrentUser: { user: User } = await resCurrentUser.json();
  
  return (
    <>
      <Container size={"xl"} style={{ position: 'relative' }}>
        <Center style={{ marginTop: '20px' }}>
          <ModeSwitcher />
        </Center>

        <Center style={{ marginTop: '60px', marginBottom: '50px' }}>
          <TimelineComp events={dataEvents.events} currentUser={dataCurrentUser.user} />
        </Center>
      </Container>
    </>
  );
}
