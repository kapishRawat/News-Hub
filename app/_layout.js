import { QueryClientProvider } from "@tanstack/react-query";
import { Tabs } from "expo-router";
import queryClient from "../lib/react-query/queryClient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={30} color={color} />
            ),
            tabBarLabelStyle: { fontSize: 12 },
          }}
        />
        <Tabs.Screen
          name="everything/index"
          options={{
            title: "Search News",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="search" size={30} color={color} />
            ),
            tabBarLabelStyle: { fontSize: 12 },
          }}
        />
        
        <Tabs.Screen
          name="categories/countryCategories/index"
          options={{
            title: "All Countries",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="flag" size={30} color={color} />
            ),
            tabBarLabelStyle: { fontSize: 12 },
          }}
        />

        <Tabs.Screen
          name="categories/index"
          options={{
            title: "All Categories",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="category" size={30} color={color} />
            ),
            tabBarLabelStyle: { fontSize: 12 },
          }}
        />
        

          

        
        <Tabs.Screen
          name="categories/[newsByCategory]"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="details/index"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="countries/index"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="game/TicTacToe"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </QueryClientProvider>
  );
}