# Memory Lane

Share memories with you Family and Friends !

![Preview](./memory-lane-preview.jpg)

[Watch the demo video](https://drive.proton.me/urls/48ARNWNK20#zKaGaOhyTNtB)

This project was created as part of a technical assessment for a company, the name of which I will not disclose.  

I had a lot of fun making it and still have many ideas, but I decided to pause for now. I completed what was requested of me and may consider continuing it in the future.

## Problem definition

- Deliver the first iteration.
- Create a solution for friends and family to share memories together in a single place.
- Compile a collection of events that occurred in chronological order.
- Each event should include (at least) a title, a description, a timestamp, and one or more images.

## Timeframe

I completed this in three days, roughly 6 to 8 hours each day, which included learning, designing, testing, coding, and having fun.

## Technical Stack 

I viewed this as a challenge, so I decided to use a few tools I hadn't used in a while (and some that I had never used before!).

- [NextJS](https://nextjs.org) v15 (Love React!) with Typescript.
- [Mantine UI library](https://mantine.dev/) (highly recommended).
- [Tabler Icons](https://tabler.io/icons) for... icons !
- [Dayjs](https://day.js.org/) for date management. It's smaller than Moment and very enjoyable to use.
- [Sqlite](https://www.sqlite.org/index.html) for the database.
- [Zod](https://zod.dev/) for form validation.
- [Zustand](https://zustand.docs.pmnd.rs/) for global state management.
- [Prisma](https://www.prisma.io) as a database ORM.
- [Figma](https://www.figma.com/) for design and mockups.

## Installation

Please note that `yarn` is required.  
If you do not have it, just install it:

```bash
npm install -g yarn
```

Everything should be set up already.  
Just clone the repository, install the packages, and run it!

```bash
git clone https://github.com/ekarious/memory-lane.git
cd memory-lane
yarn install
yarn run dev
```

## Use

Just have fun with this little `demo` app.
