import React from "react";
import { Container, Grid, Text } from "@mantine/core";
import SearchBar from "../components/SearchBar";
import ChordCard from "../components/ChordCard";

const chords = [
  { name: "C Major", sound: "/sounds/c-major.mp3" },
  { name: "G Major", sound: "/sounds/g-major.mp3" },
  { name: "D Minor", sound: "/sounds/d-minor.mp3" },
];

function HomePage() {
  return (
    <Container>
      <Text align="center" size="xl" weight={700} mt="md">
        Guitar Chord Library
      </Text>
      <SearchBar />
      <Grid mt="lg">
        {chords.map((chord, index) => (
          <Grid.Col span={12} sm={6} md={4} key={index}>
            <ChordCard chord={chord} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
