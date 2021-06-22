import { extendTheme } from "@chakra-ui/react";

import { fonts } from "./foundations/fonts";
import { Badge } from "./components/Badge";

const overrides = () => {
  return fonts;
  components: {
    Badge;
  }
};

export default extendTheme(overrides);
