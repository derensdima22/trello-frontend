
// type Messages = typeof import("./src/messages/en.json");
// type UaMessages = typeof import("./src/messages/ua.json");

// declare interface IntlMessage extends Messages, UaMessages {};

import en from './src/messages/ua.json';
import ua from './src/messages/ua.json';
 
type Messages = typeof en;
type UaMessages = typeof ua;
 
declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages, UaMessages {}
}