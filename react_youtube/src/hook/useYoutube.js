import { useQuery } from "@tanstack/react-query";
import youtube from "../api/youtube";

export const useChannelInfo = (channelId) => {
  return useQuery({
    queryKey: ["channel", channelId],
    queryFn: async () => {
      const response = await youtube.get("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      return response.data.items[0];
    },
    enabled: !!channelId,
  });
};

export const useVideos = (keyword) => {
  return useQuery({
    queryKey: ["videos", keyword],
    queryFn: async () => {
      const response = await youtube.get("/search", {
        params: {
          part: "snippet",
          maxResults: 25,
          q: keyword,
          type: "video",
        },
      });
      return response.data.items;
    },
    enabled: !!keyword,
  });
};