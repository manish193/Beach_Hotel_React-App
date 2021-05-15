import { createClient } from "contentful";

export default createClient({
  space: process.env.development.REACT_APP_API_SPACE,
  accessToken: process.env.development.REACT_ACCESS_TOKEN,
});
