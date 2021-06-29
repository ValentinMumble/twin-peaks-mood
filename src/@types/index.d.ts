declare module 'youtube-random-video' {
  function getRandomVid(
    apiKey: string,
    callback: (error: Error | null, data: GoogleApiYouTubeSearchResource) => void
  ): void;

  export {getRandomVid};
}
