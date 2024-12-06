import React from "react";
import { Card, Text, Button } from "@mantine/core";

function ChordCard({ chord }) {
  const playSound = () => {
    const audio = new Audio(chord.sound);
    audio.play();
  };

  return (
    <Card shadow="md" padding="lg" radius="md" withBorder>
      <Text size="lg" weight={600} align="center">
        {chord.name}
      </Text>
      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        onClick={playSound}
      >
        Play Sound
      </Button>
    </Card>
  );
}

export default ChordCard;
