import { Box, Flex, Text, Image, Link, Heading } from "@chakra-ui/react";
import ScrollButton from "./ScrollButtonAnim";
export default function About() {
  return (
    <Flex
      height="49vh"
      backgroundColor="#121417"
      color="#E6CCB2"
      width="100%"
      flexDir="column"
      alignItems="center"
    >
      <Heading
        as="h1"
        textAlign="center"
        width="100%"
        fontSize="50px"
        fontFamily="MagentaRose"
        pt="8"
      >
        About
      </Heading>{" "}
      <Text textAlign="center" paddingTop="50" width="50%">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste modi
        expedita alias id amet quo dolore nobis distinctio ut. Ea consectetur
        incidunt optio fugit rem, aperiam amet odio error nostrum. In reiciendis
        culpa sint magni commodi nobis quibusdam qui quod corporis, beatae
        reprehenderit perferendis tenetur sequi voluptas accusantium nesciunt,
        aperiam et, saepe maiores odio quas quaerat quo. Rerum dolorem quod
        laboriosam sequi possimus voluptatibus quidem dicta ipsa illo maiores
        recusandae voluptates nulla, suscipit quaerat at totam ut delectus
        voluptate dolore sed quibusdam laudantium sit. Earum nemo nihil porro
        amet aut laboriosam voluptas veniam ut, corrupti provident beatae quod
        fugit repellat quia modi minus molestiae consectetur natus aspernatur
        placeat? Doloribus mollitia magnam enim obcaecati libero sit officiis
      </Text>
      <ScrollButton />
    </Flex>
  );
}
