"use client";

import { SegmentedControl } from "@mantine/core";
import { useState } from "react";
import classes from "./ModeSwitcher.module.css";

export default function ModeSwitcher() {
  const [value, setValue] = useState("both");

  return (
    <div>
      <SegmentedControl
        className={classes.switch}
        radius="xl"
        value={value}
        onChange={setValue}
        data={[
          { label: "Family", value: "family" },
          { label: "Both", value: "both" },
          { label: "Friends", value: "friends" },
        ]}
      />
    </div>
  );
}
