# 🌲🏔🏔🌲 Twin Peaks mood

/\\/\\/\\/\\/\\/\\/\\

Turn any YouTube video into the opening credits of Twin Peaks.

**https://twin-peaks-mood.vumble.dev**

## How it works

1. A Black Lodge floor (the black and white zigzag) covers the screen with "enter the lodge...".
2. Click it to go in. The Twin Peaks theme starts, and the video plays full screen, muted and
   without controls.
3. The show's credits fade in and out over the video, in the same green-outlined font, with a warm
   orange tint on top so it looks like an old TV broadcast.

## Use your own video

Put a YouTube video id after the slash:

```
https://twin-peaks-mood.vumble.dev/<YouTube id>
```

For example, yodeling:
https://twin-peaks-mood.vumble.dev/BZL0kiyjbyo

With no id, it plays a mountain landscape video.

## Run it locally

```bash
npm install
npm run dev
```

`npm run build` type-checks and builds the static site into `dist/`.

Built with React, TypeScript, Vite, styled-components and
[react-youtube](https://github.com/tjallingt/react-youtube). Hosted on Vercel, where
`vercel.json` sends every `/<id>` path to the same page.

## Credits

Twin Peaks, its theme music by Angelo Badalamenti and its title font (ITC Avant Garde Gothic) belong
to their owners. This is a fan tribute and is not affiliated with them.
