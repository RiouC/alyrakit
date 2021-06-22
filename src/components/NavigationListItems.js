import { List, ListItem, Link } from "@chakra-ui/react";

const NavigationListItems = ({ sx }) => {
  return (
    <List
      sx={{
        textTransform: "uppercase",
        a: { p: 3, display: "inline-block" },
        ...sx,
      }}
    >
      <ListItem>
        <Link href="/#sample">Sample</Link>
      </ListItem>
      <ListItem href="/#pricing">
        <Link href="/#sample">Pricing</Link>
      </ListItem>
      <ListItem href="/#buy-now">
        <Link fontWeight="bold" href="/#sample">
          Buy now
        </Link>
      </ListItem>
    </List>
  );
};

export default NavigationListItems;
