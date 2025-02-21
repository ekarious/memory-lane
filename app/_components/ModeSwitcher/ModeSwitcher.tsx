"use client";

import { SegmentedControl } from "@mantine/core";
import classes from "./ModeSwitcher.module.css";
import { EventMode } from "@/types/events";
import { useModeStore } from "@/lib/storeProvider";

export default function ModeSwitcher() {
  const mode = useModeStore(state => state.mode);
  const changeMode = useModeStore(state => state.changeMode);

  return (
    <div className={classes.switch}>
      <SegmentedControl
        radius="xl"
        value={mode}
        onChange={(v) => changeMode(v as EventMode)}
        data={[
          { label: "Family", value: EventMode.FAMILY },
          { label: "Both", value: EventMode.BOTH },
          { label: "Friends", value: EventMode.FRIENDS },
        ]}
      />
    </div>
  );
}
