import React from "react";
import { Theme, Card, Text, Box, Flex, Inset } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

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
      <Box className="p-6 bg-gray-100 min-h-screen">
        {/* Header Section */}
        <Flex justify="between" align="center" mb="6">
          <Text size="6" weight="bold" as="h1">
            Guitar Chord Library
          </Text>
        </Flex>

        {/* Chords Grid */}
        <Flex
          wrap="wrap"
          gap="5"
          className="justify-center"
          style={{ rowGap: "1.5rem", columnGap: "1.5rem" }}
        >
          {chords.map((chord, index) => (
            <Card
              key={index}
              size="3"
              style={{
                width: "300px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
              }}
            >
              {/* Image */}
              <Inset clip="padding-box" side="top">
                <img
                  src={chord.image}
                  alt={chord.name}
                  className="w-full h-48 object-cover"
                />
              </Inset>

              {/* Content */}
              <Box p="4">
                <Text size="5" weight="bold" as="h2" className="mb-1">
                  {chord.name}
                </Text>
                <Text size="3" color="gray" className="mb-2">
                  {chord.type}
                </Text>
                <Text size="2" color="gray" className="mb-4">
                  {chord.description}
                </Text>
                <button
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  style={{
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                  }}
                >
                  Play
                </button>
              </Box>
            </Card>
          ))}
        </Flex>
      </Box>
    </Theme>
  );
}

export default HomePage;
