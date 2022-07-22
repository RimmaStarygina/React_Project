import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../component/ListItem";
import Screen from "../component/Screen";
import ListItemSeparator from "../component/ListItemSeparator";
import ListItemDeleteAction from "../component/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Hello",
    description: "Is it stil available?",
    image: require("../assets/rachel.jpeg"),
  },
  {
    id: 2,
    title: "Hi!",
    description: "Where are you located?",
    image: require("../assets/rachel.jpeg"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Hello!",
              description: "D2",
              image: require("../assets/rachel.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  // screen: {
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },
});

export default MessageScreen;
