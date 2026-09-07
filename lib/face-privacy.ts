// Shared wording for the public policy and the App Review response.
export const facePrivacy = [
  {
    id: 'face-data',
    title: 'Camera and face data',
    text: 'The camera-free OutBrick update (build 18) removes the optional “Look at me (camera)” feature. That build does not request camera permission, start a face-tracking session, or collect or process face data. Earlier iOS builds, including version 1.0 (13), contain the optional feature described below. Updating the website does not change an older app already installed on a device.',
  },
  {
    id: 'face-data-collected',
    title: 'Face information processed in earlier builds',
    text: 'In version 1.0 (13), the feature is off by default and requires the player to enable it in Settings and grant camera permission. On supported devices, Apple’s ARKit processes the front-camera input and provides a tracked face position and expression coefficients. OutBrick reads the face position and the left and right smile and outer-eyebrow-raise coefficients. It does not read or store a face mesh, depth map, face photograph, or video recording, and does not identify a person. Later development builds also used eye-direction, head-tilt and blink values and a temporary face-return event; these have all been removed from build 18.',
  },
  {
    id: 'face-data-use',
    title: 'Purpose and use of face data',
    text: 'Face information in earlier builds is used only to animate the mascots: looking toward the player and gently mirroring expressions. The later face-return event could trigger a local greeting, using a curated line or Apple’s on-device language model when available. Face information is not used for puzzle controls, scoring, progression, authentication, advertising, analytics, profiling, or model training. The whole game is playable without the feature.',
  },
  {
    id: 'face-data-sharing',
    title: 'Face data sharing and storage',
    text: 'OutBrick does not send face data, camera images, video, or face-derived animation values to the developer, third parties, servers, iCloud, Game Center, or an external AI service. The face-tracking calculations and animation values are processed locally in temporary device memory. The saved on/off preference is a setting, not a face record. OutBrick does not maintain a face-data database or save face data to files or backups.',
  },
  {
    id: 'face-data-retention',
    title: 'Face data retention and deletion',
    text: 'Earlier builds continually replace temporary face values while the feature runs. The tracking session is stopped and its current values reset when the Home mascot stage stops or the app becomes inactive; renderer animation values settle back locally. No face-data history is retained on disk or on a server. Temporary in-memory state is released when the app terminates. To prevent further camera access in an older build, turn off “Look at me (camera)” in OutBrick Settings or revoke OutBrick’s Camera permission in the device’s Settings. There is no stored face dataset to request or delete. Build 18 removes the feature entirely.',
  },
] as const;
