"use client";

import {
  Avatar,
  Text,
  TimelineItem,
  Group,
  Chip,
  TextInput,
  Textarea,
  Button,
  Flex,
  Divider,
  UnstyledButton,
  Image,
} from "@mantine/core";
import { User } from "@/types/users";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, FileRejection, FileWithPath } from "@mantine/dropzone";
import classes from "./NewEvent.module.css";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { sanitizeFileName } from "@/utils/string";

interface Props {
  currentUser: User;
  state: {
    readonly open: () => void;
    readonly close: () => void;
    readonly toggle: () => void;
  };
}

// Validation schema for the form using Zod
const schema = z.object({
  event: z.object({
    userId: z.number().int().positive(),
    title: z.string().min(3),
    description: z.string().min(8),
    isFamily: z.boolean(),
    isFriend: z.boolean(),
  }),
  attachment: z.object({
    filename: z.string(),
    extension: z.string(),
  }),
});

export default function NewEvent(props: Props) {
  const [hasImage, setHasImage] = useState(false);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const [vImage, setVImage] = useState<FileWithPath | null>(null);
  const router = useRouter();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      user: {
        id: props.currentUser.id,
      },
      event: {
        title: "",
        description: "",
        isFamily: true,
        isFriend: true,
      },
      attachment: {
        filename: "",
        extension: "",
      },
    },
    validate: zodResolver(schema),
  });

  // We need to knoiw if an image is provided or not, this is actually the easiest way...
  form.watch("attachment.filename", ({ value }) => {
    setHasImage(value !== "" ? true : false);
  });

  const onAttachementDropped = (files: FileWithPath[]) => {
    if (!files) {
      return;
    }

    const image = files[0];
    setVImage(image);
    const sanitized = sanitizeFileName(image.name);
    const [filename, extension] = sanitized.split(".");

    // Save data to the form
    form.setFieldValue("attachment.filename", filename);
    form.setFieldValue("attachment.extension", `.${extension}`);

    // Create a preview to show
    const url = URL.createObjectURL(image);
    setPreviewImageUrl(url);
  };

  const onAttachementRejected = (files: FileRejection[]) => {
    console.log(files);

    // TODO: Show why the file was rejected
    // TODO: Adapt the design
  };

  const resetImage = () => {
    form.setFieldValue("attachment.filename", "");
    form.setFieldValue("attachment.extension", "");
    setVImage(null);
  };

  const submit = async () => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/memories`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.getValues()),
      }
    );

    if (vImage) {
      const formData = new FormData();
      formData.append("file", vImage);

      const uploadImage = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/uploads`,
        {
          method: "POST",
          body: formData,
        }
      );
    }

    if (result) {
      router.refresh();

      // Reset the form
      form.reset();
      resetImage();
      props.state.close();
    }
  };
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
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Group justify="space-between">
          <Text c="dimmed" size="sm">
            {props.currentUser.status}
          </Text>

          {hasImage && (
            <UnstyledButton component="a" c="red" fz={13} onClick={resetImage}>
              Remove attachement
            </UnstyledButton>
          )}
        </Group>

        {!hasImage && (
          <Dropzone
            maxSize={5 * 1024 ** 2}
            accept={["image/png", "image/jpeg", "image/jpg"]}
            maxFiles={1}
            onDrop={(files) => onAttachementDropped(files)}
            onReject={(files) => onAttachementRejected(files)}
          >
            <Group
              justify="center"
              gap="xl"
              mih={100}
              style={{ pointerEvents: "none" }}
            >
              <Dropzone.Accept>
                <IconUpload
                  size={52}
                  color="var(--mantine-color-blue-6)"
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  size={52}
                  color="var(--mantine-color-red-6)"
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto
                  size={52}
                  stroke={1.5}
                  className={classes.iconColor}
                />
              </Dropzone.Idle>

              <Text size="xl" inline c="gray.5">
                Drop an Image (jpg, png)
              </Text>
            </Group>
          </Dropzone>
        )}

        {hasImage && <Image src={previewImageUrl} alt="Test" maw={450} />}

        <TextInput
          variant="unstyled"
          size="lg"
          radius="xs"
          placeholder="Title"
          key={form.key("event.title")}
          {...form.getInputProps("event.title")}
        />

        <Textarea
          variant="unstyled"
          radius="xs"
          placeholder="Description"
          key={form.key("event.description")}
          {...form.getInputProps("event.description")}
        />

        <Group justify="flex-start" gap={10}>
          <Chip
            size="xs"
            color="pink"
            key={form.key("event.isFamily")}
            {...form.getInputProps("event.isFamily", { type: "checkbox" })}
          >
            Family
          </Chip>
          <Chip
            size="xs"
            color="cyan"
            key={form.key("event.isFriend")}
            {...form.getInputProps("event.isFriend", { type: "checkbox" })}
          >
            Friends
          </Chip>
        </Group>

        <Divider mt={20} />

        <Flex justify={"stretch"} gap={10}>
          <Button type="submit" fullWidth mt="lg" onClick={submit}>
            Save
          </Button>
          <Button
            type="button"
            onClick={() => props.state.close()}
            color="red"
            fullWidth
            mt="lg"
          >
            Cancel
          </Button>
        </Flex>
      </form>
    </TimelineItem>
  );
}
