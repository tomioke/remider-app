import { Provider as SettingsProvider } from "./Context/SettingsContext";
import { Provider as ReminderProvider } from "./Context/ReminderDataContext";
import { Provider as BirthdayProvider } from "./Context/BirthdayDataContext";

import React from "react";
import Main from "./Screens/main";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["EventEmitter.removeListener"]);

export default function App() {
  return (
    <SettingsProvider>
      <ReminderProvider>
        <BirthdayProvider>
          <Main />
        </BirthdayProvider>
      </ReminderProvider>
    </SettingsProvider>
  );
}
