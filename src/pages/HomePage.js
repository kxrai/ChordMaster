import React from "react";
import { Card, Text, Box, Flex, Theme, Inset, Strong } from "@radix-ui/themes";

function HomePage() {
  const chords = [
    {
      name: "C Major",
      type: "Major",
      description: "A bright and joyful sound.",
      image:
        "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "G Major",
      type: "Major",
      description: "A common chord in many genres.",
      image:
        "https://images.unsplash.com/photo-1558976023-dcfaf396d126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <Theme>
      <Box className="p-6">
        {/* Header Section */}
        <Flex justify="between" align="center" mb="5">
          <Text size="6" weight="bold">
            Guitar Chord Library
          </Text>
        </Flex>

        {/* Chords Grid */}
        <Flex wrap="wrap" gap="4">
          {chords.map((chord, index) => (
            <Box key={index} style={{ maxWidth: 240 }}>
              <Card>
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src={chord.image}
                    alt={chord.name}
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 140,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>
                <Box p="3">
                  <Text as="p" size="3" weight="bold">
                    {chord.name}
                  </Text>
                  <Text as="p" size="2" color="gray">
                    {chord.type}
                  </Text>
                  <Text as="p" size="2" mt="2">
                    {chord.description}
                  </Text>
                  <button
                    style={{
                      marginTop: "12px",
                      display: "block",
                      padding: "8px 16px",
                      backgroundColor: "#007AFF",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Play
                  </button>
                </Box>
              </Card>
            </Box>
          ))}
        </Flex>
      </Box>
    </Theme>
  );
}

export default HomePage;
 