import React from "react";
import { Card, Text, Button, Stack } from "@mantine/core";

function ChordCard({ chord }) {
  const playSound = () => {
    const audio = new Audio(chord.sound);
    audio.play();
  };

  return (
    <Card shadow="md" padding="lg" radius="lg" withBorder>
      <Stack align="center">
        <Text size="lg" weight={700}>
          {chord.name}
        </Text>
        <Button
          variant="light"
          color="blue"
          radius="lg"
          size="md"
          onClick={playSound}
        >
          Play Sound
        </Button>
      </Stack>
    </Card>
  );
}

export default ChordCard;
